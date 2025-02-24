export const LanguageSwitcher = ({ language, setLanguage }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2">
    <button
      onClick={() => setLanguage('es')}
      className={`px-4 py-2 rounded-full ${
        language === 'es' ? 'bg-amber-600' : 'bg-gray-600'
      } text-white transition-colors`}
    >
      ES
    </button>
    <button
      onClick={() => setLanguage('en')}
      className={`px-4 py-2 rounded-full ${
        language === 'en' ? 'bg-amber-600' : 'bg-gray-600'
      } text-white transition-colorts`}
    >
      EN
    </button>
  </div>
);