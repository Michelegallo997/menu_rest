export const MenuHeader = ({ language }) => (
    <header className="text-center mb-16">
      <h1 className="text-6xl font-bold mb-4 tracking-tighter">
        {language === 'es' ? 'SUSTARD BLOW' : 'SEA HARVEST'}
      </h1>
      <div className="w-24 h-[2px] bg-amber-500 mx-auto mb-6"></div>
      <h2 className="text-3xl font-light opacity-90">
        {language === 'es' ? 'MENÚ PREMIUM' : 'PREMIUM MENU'}
      </h2>
    </header>
  );