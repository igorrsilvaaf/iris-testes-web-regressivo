export const elements = {
  titleToday: '[data-testid="today-title"]',
  sidebar: '[data-testid="app-sidebar"]',
  pomodoroTuday: '[data-testid="pomodoro-timer"]',
  titlePomodoro: '[data-testid="pomodoro-title"]',
  addTaskButton: '[data-testid="add-task-button"]',
  calendarButton: '[data-testid="calendar-button"]',
  
  closeChangelogButton: '[data-testid="dialog-footer"] > .gap-2'
};

class TodayElements {
  getValidateTitleToday() {
    return elements.titleToday;
  }

  getValidateSidebar() {
    return elements.sidebar;
  }

  getValidatePomodoroToday() {
    return elements.pomodoroTuday;
  }

  getValidateTitlePomodoro() {
    return elements.titlePomodoro;
  }

  getAddTaskButton() {
    return elements.addTaskButton;
  }

  getClickInButtonCalendar() {
    return elements.calendarButton;
  }

  getValidationsortBy() {
    return elements.sortBy;
  }

  getClickInButtonCloseChangelog() {
    return elements.closeChangelogButton;
  }
}

export default new TodayElements();
