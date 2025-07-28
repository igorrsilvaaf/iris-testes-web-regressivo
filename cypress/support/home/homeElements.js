export const elements = {
  title: '[data-testid="landing-main-title"]',
  subtitulo: '[data-testid="landing-main-subtitle"]',

  loginButton: '[data-testid="landing-login-button"]',
  registerButton: '[data-testid="landing-register-button"]',

  featuresTitulo: '[data-testid="landing-features-title"]',
  landingFeaturePomodoro: '[data-testid="landing-feature-pomodoro"]',
  landingFeatureTask: '[data-testid="landing-feature-tasks"]',

  createAccountButton: '[data-testid="landing-create-account-button"]',
  loginCtaButton: '[data-testid="landing-login-cta-button"]',
};

class homeElements {
  getTitle() {
    return elements.title;
  }

  getSubtitulo() {
    return elements.subtitulo;
  }

  getLoginButton() {
    return elements.loginButton;
  }

  getRegisterButton() {
    return elements.registerButton;
  }

  get featuresTitulo() {
    return elements.featuresTitulo;
  }

  get landingFeaturePomodoro() {
    return elements.landingFeaturePomodoro;
  }

  get landingFeatureTask() {
    return elements.landingFeatureTask;
  }

  get createAccountButton() {
    return elements.createAccountButton;
  }

  get loginCtaButton() {
    return elements.loginCtaButton;
  }
}

export default new homeElements();
