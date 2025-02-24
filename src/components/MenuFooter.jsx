export const MenuFooter = ({ language }) => (
    <footer className="mt-20 text-center space-y-4 text-sm opacity-80">
      <div className="flex justify-center gap-6">
        <span>{language === 'es' ? '📞 +51 987 654 321' : '📞 +1 234 567 890'}</span>
      </div>
      <p>{language === 'es' ? 'Av. Costa Verde 123, Lima' : '123 Beachfront Ave, Lima'}</p>
      <p className="font-mono">APR1722/85</p>
      <p>{language === 'es' ? 'Abierto de 12PM a 12AM' : 'Open 12PM to 12AM'}</p>
    </footer>
  );