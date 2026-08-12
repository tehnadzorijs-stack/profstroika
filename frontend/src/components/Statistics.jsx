export default function Statistics() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Строительное образование в России
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold">87</div>
            <p className="text-blue-200">строительных вузов</p>
          </div>
          <div>
            <div className="text-5xl font-bold">45</div>
            <p className="text-blue-200">строительных колледжей</p>
          </div>
          <div>
            <div className="text-5xl font-bold">156 000</div>
            <p className="text-blue-200">студентов</p>
          </div>
          <div>
            <div className="text-5xl font-bold">21 578</div>
            <p className="text-blue-200">бюджетных мест</p>
          </div>
        </div>
      </div>
    </section>
  );
}
