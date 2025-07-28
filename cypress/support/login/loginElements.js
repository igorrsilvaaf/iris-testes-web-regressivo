export const loginElements = {
  titleLogin: 'h1:contains("Bem-vindo de volta")',

  inputEmail: '[data-testid="login-email-input"]',
  inputPassword: '[data-testid="login-password-input"]',

  loginButtonHome: '[data-testid="landing-login-button"]',
  loginButton: '[data-testid="login-submit-button"]',
  registerButton: '[data-testid="landing-register-button"]',
  sidebarNavToday: '[data-testid="sidebar-nav-today"]',

  toastSuccessLogin: '[data-testid="toast-login-success"]',
  toastErrorLogin: '[data-testid="toast-login-error"]',

  imageMenu: '[data-testid="header-user-avatar-image"]',
  LogoutButton: '[data-testid="logout-menu-item"]',

  validateChangeLog: '[data-testid="dialog-content"]',
  closeChangelogButton: '[data-testid="button"]',
};

class LoginElements {
  getValidateTitleLogin() {
    return loginElements.titleLogin;
  }

  getFillFieldUsername() {
    return loginElements.inputEmail;
  }

  getFillFieldPassword() {
    return loginElements.inputPassword;
  }

  getClickInButtonLogin() {
    return loginElements.loginButton;
  }

  getClickInButtonRegister() {
    return loginElements.registerButton;
  }

  getClickInButtonLoginHome() {
    return loginElements.loginButtonHome;
  }

  getValidationSuccessLogin() {
    return loginElements.toastSuccessLogin;
  }

  getValidateField() {
    return loginElements.sidebarNavToday;
  }

  getValidationErrorLogin() {
    return loginElements.toastErrorLogin;
  }

  getClickInButtonMenu() {
    return loginElements.imageMenu;
  }

  getClickInButtonLogout() {
    return loginElements.LogoutButton;
  }

  getValidateChangeLog() {
    return loginElements.validateChangeLog;
  }

  getClickInButtonCloseChangelog() {
    return loginElements.closeChangelogButton;
  }
}

export default new LoginElements();
