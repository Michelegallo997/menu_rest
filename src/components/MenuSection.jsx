export const MenuSection = ({ title, items }) => (
  <section className="space-y-14">
    <h3 className="text-2xl font-bold mb-8 border-b border-amber-500 pb-2">
      {title}
    </h3>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm opacity-75">{item.description}</p>
          </div>
          <span>${item.price}</span>
        </div>
      ))}
    </div>
  </section>
);