import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set) => ({
      // Topic completion: { "subjectId": ["topicId1", "topicId2"] }
      completedTopics: {},

      // Study log: array of { date: "YYYY-MM-DD", subjectId, topicId }
      studyLog: [],

      toggleTopicComplete: (subjectId, topicId) =>
        set((state) => {
          const subjectTopics = state.completedTopics[subjectId] || [];
          const isCompleted = subjectTopics.includes(topicId);
          const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

          return {
            completedTopics: {
              ...state.completedTopics,
              [subjectId]: isCompleted
                ? subjectTopics.filter((id) => id !== topicId)
                : [...subjectTopics, topicId],
            },
            // Only log when marking as complete (not when un-completing)
            studyLog: isCompleted
              ? state.studyLog
              : [...state.studyLog, { date: today, subjectId, topicId }],
          };
        }),

      // Quiz Scores: { "quizId": score }
      quizScores: {},
      setQuizScore: (quizId, score) =>
        set((state) => ({
          quizScores: { ...state.quizScores, [quizId]: score },
          // Also log quiz activity
          studyLog: [...state.studyLog, { date: new Date().toISOString().split('T')[0], subjectId: quizId, topicId: `quiz-${quizId}` }],
        })),

      // Notes: string (Markdown content)
      notes: '',
      setNotes: (content) => set({ notes: content }),

      // Planner Tasks: [{ id, text, completed }]
      plannerTasks: [],
      addPlannerTask: (taskText) =>
        set((state) => ({
          plannerTasks: [
            ...state.plannerTasks,
            { id: Date.now().toString(), text: taskText, completed: false },
          ],
        })),
      togglePlannerTask: (taskId) =>
        set((state) => ({
          plannerTasks: state.plannerTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
        })),
      deletePlannerTask: (taskId) =>
        set((state) => ({
          plannerTasks: state.plannerTasks.filter((task) => task.id !== taskId),
        })),

      // Settings
      darkModeEnabled: false,
      toggleDarkMode: () => set((state) => ({ darkModeEnabled: !state.darkModeEnabled })),
      
      fontSize: 'base', // 'small', 'base', 'large'
      setFontSize: (size) => set({ fontSize: size }),

      // UI State (not persisted if we used partialize, but okay for now)
      isTopicSidebarOpen: false,
      setIsTopicSidebarOpen: (open) => set({ isTopicSidebarOpen: open }),

      // Reset
      resetProgress: () => set({ completedTopics: {}, quizScores: {}, studyLog: [] }),
      resetAllData: () =>
        set({
          completedTopics: {},
          quizScores: {},
          studyLog: [],
          notes: '',
          plannerTasks: [],
          darkModeEnabled: false,
          fontSize: 'base',
        }),
    }),
    {
      name: 'formz-study-storage',
    }
  )
);

export default useAppStore;
