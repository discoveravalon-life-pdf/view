# Adobe PDF Login Form

A modern, two-step login form with multi-language support and PDF viewer integration.

## Features

✅ **Two-Step Authentication**
- Step 1: Email entry with "View PDF" option
- Step 2: Password entry with email confirmation

✅ **Email Management**
- Browser autofill support for recently used emails
- Email suggestion from browser history
- Change email option before password entry
- Remember email functionality

✅ **Multi-Language Support**
- English (en)
- Spanish (es)
- French (fr)
- Chinese (zh)

✅ **PDF Integration**
- Direct link to view Telegraphic Transfer PDF
- Opens PDF in new tab

✅ **Form Validation**
- Email format validation
- Password length validation (minimum 6 characters)
- Real-time error messages
- Enter key support for form submission

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Smooth animations and transitions
- Clean, modern UI

✅ **Local Storage**
- Saves email for future logins
- Remembers preferred language
- Persistent data across sessions

## Folder Structure

```
adobe-pdf/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   ├── main.js         # Form logic and validation
│   └── translations.js # Multi-language support
├── images/
│   └── background.jpg  # Background image (your image goes here)
└── README.md           # This file
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/discoveravalon-life-pdf/view.git
   cd view
   ```

2. **Add your background image**
   - Place your image file in the `images/` folder
   - Name it `background.jpg` (or update the CSS file path)

3. **Open in browser**
   - Double-click `index.html` to open locally, or
   - Use Live Server extension in VS Code

## How to Use

1. **Enter Email**: Type or select your email address
2. **View PDF** (Optional): Click "View PDF" to open the Telegraphic Transfer document
3. **Click Continue**: Proceed to the password step
4. **Review Email**: Confirm the email shown, or click "Change" to go back
5. **Enter Password**: Type your password (minimum 6 characters)
6. **Check Remember Me** (Optional): To save your email for next login
7. **Sign In**: Click to complete login

## Customization

### Update PDF Link
In `js/main.js`, line with `viewPdfLink.addEventListener`:
```javascript
window.open('path/to/your/telegraphic-transfer.pdf', '_blank');
```

### Add More Languages
In `js/translations.js`, add a new language object:
```javascript
ar: {
    pageTitle: 'دخول',
    emailLabel: 'عنوان البريد الإلكتروني',
    // ... add all other translations
}
```
Then add button in `index.html`:
```html
<button class="lang-btn" data-lang="ar">العربية</button>
```

### Change Colors
Edit `css/style.css` and modify:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Files Overview

- **index.html**: Two-step form with email and password inputs
- **css/style.css**: All styling including animations and responsive design
- **js/main.js**: Form logic, validation, and email management
- **js/translations.js**: Multi-language support system

## License

This project is open source and available for personal and commercial use.

## Author

Created by seo6-ma
