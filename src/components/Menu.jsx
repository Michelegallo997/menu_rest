// En Menu.jsx
import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuHeader } from './MenuHeader';
import { MenuSection } from './MenuSection';
import { MenuFooter } from './MenuFooter';

export const Menu = ({ language, setLanguage }) => {
    const menuData = {
      appetizers: {
        title: language === 'es' ? 'ENTRADAS' : 'APPETIZERS',
        items: [
          {
            name: language === 'es' ? 'Ceviche Clásico' : 'Classic Ceviche',
            description: language === 'es' 
              ? 'Pescado blanco, leche de tigre' 
              : 'White fish, tiger\'s milk',
            price: 14
          },
          {
            name: language === 'es' ? 'Tartar de Atún' : 'Tuna Tartare',
            description: language === 'es' 
              ? 'Aguacate, chips de ñame' 
              : 'Avocado, yam chips',
            price: 16
          }
        ]
      },
      salads: {
        title: language === 'es' ? 'ENSALADAS' : 'SALADS',
        items: [
          {
            name: language === 'es' ? 'Ensalada de Quinoa' : 'Quinoa Salad',
            description: language === 'es' 
              ? 'Quinoa, aguacate, mango, nueces' 
              : 'Quinoa, avocado, mango, walnuts',
            price: 12
          },
          {
            name: language === 'es' ? 'César de Langosta' : 'Lobster Caesar',
            description: language === 'es' 
              ? 'Langosta, lechuga romana, croutons' 
              : 'Lobster, romaine lettuce, croutons',
            price: 18
          }
        ]
      },
      meats: {
        title: language === 'es' ? 'CARNES' : 'MEATS',
        items: [
          {
            name: language === 'es' ? 'Lomo Wagyu' : 'Wagyu Tenderloin',
            description: language === 'es' 
              ? '400g, reducción de vino tinto' 
              : '400g, red wine reduction',
            price: 42
          },
          {
            name: language === 'es' ? 'Costillas BBQ' : 'BBQ Ribs',
            description: language === 'es' 
              ? 'Cocción lenta 8 horas' 
              : '8-hour slow cooked',
            price: 26
          }
        ]
      },
      seafood: {
        title: language === 'es' ? 'MARISCOS' : 'SEAFOOD',
        items: [
          {
            name: language === 'es' ? 'Paella Marina' : 'Seafood Paella',
            description: language === 'es' 
              ? 'Arroz bomba con mariscos' 
              : 'Bomba rice with seafood',
            price: 28
          }
        ]
      },
      desserts: {
        title: language === 'es' ? 'POSTRES' : 'DESSERTS',
        items: [
          {
            name: language === 'es' ? 'Volcán de Chocolate' : 'Chocolate Lava Cake',
            description: language === 'es' 
              ? 'Con helado de vainilla' 
              : 'With vanilla ice cream',
            price: 9
          },
          {
            name: language === 'es' ? 'Crepas de Dulce de Leche' : 'Dulce de Leche Crepes',
            description: language === 'es' 
              ? 'Con nuez caramelizada' 
              : 'With caramelized walnuts',
            price: 8
          }
        ]
      },
      drinks: {
        title: language === 'es' ? 'BEBIDAS' : 'DRINKS',
        items: [
          {
            name: language === 'es' ? 'Pisco Sour' : 'Pisco Sour',
            description: language === 'es' 
              ? 'Clásico peruano' 
              : 'Peruvian classic',
            price: 12
          },
          {
            name: language === 'es' ? 'Jugo de Frutas' : 'Fresh Juice',
            description: language === 'es' 
              ? 'Selección de frutas de temporada' 
              : 'Seasonal fruit selection',
            price: 6
          },
          {
            name: language === 'es' ? 'Vinos Premium' : 'Premium Wines',
            description: language === 'es' 
              ? 'Copa/carta completa' 
              : 'By glass/full bottle',
            price: language === 'es' ? '9-120' : '9-120'
          }
        ]
      }
    };
  
    return (
      <div className="fixed-background">
        <div className="menu-container">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <div className="max-w-4xl mx-auto px-4 py-20 text-white">
            <MenuHeader language={language} />
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Columna Izquierda */}
              <div className="space-y-14">
                <MenuSection {...menuData.appetizers} />
                <MenuSection {...menuData.salads} />
                <MenuSection {...menuData.desserts} />
              </div>
  
              {/* Columna Derecha */}
              <div className="space-y-14">
                <MenuSection {...menuData.meats} />
                <MenuSection {...menuData.seafood} />
                <MenuSection {...menuData.drinks} />
              </div>
            </div>
            
            <MenuFooter language={language} />
          </div>
        </div>
      </div>
    );
  };