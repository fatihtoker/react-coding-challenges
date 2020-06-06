const DARK_MODE_CLASS = 'dark-mode';

const activate = () => {
    document.documentElement.classList.add(DARK_MODE_CLASS);
}
const deActivate = () => {
    document.documentElement.classList.remove(DARK_MODE_CLASS);
}

export const DarkMode = {
    activate,
    deActivate
}