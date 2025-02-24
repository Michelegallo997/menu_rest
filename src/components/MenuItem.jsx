// components/MenuItem.jsx
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

const MenuItem = ({ itemKey, price }) => {
  const { language } = useLanguage();
  const item = translations[language].sections.items[itemKey];

  return (
    <div className="flex justify-between items-start mb-8">
      <div className="w-3/4">
        <p className="font-medium text-lg">{item.title}</p>
        <p className="text-sm opacity-75 mt-1">{item.description}</p>
      </div>
      <span className="font-medium">${price}</span>
    </div>
  );
};

export default MenuItem;