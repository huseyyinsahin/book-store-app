import React from "react";
import { team } from "../helper/team";

function Contact() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Ekibimiz
          </h3>
          <p className="text-gray-600 mt-3">
            Kitap Çarşısı olarak, sorularınızı yanıtlamaktan ve size en iyi
            hizmeti sunmaktan memnuniyet duyarız. Aşağıda iletişim ekibimizden
            sizinle ilgilenecek uzmanlar yer alıyor.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-20 h-20 mx-auto">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt={item.name}
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
