import React from "react";

function About() {
  return (
    <section className="pb-32 pt-24">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-lg sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">Hakkımızda</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Kitapların dünyasında 25 yılı aşkın tecrübeyle
            </p>
            <p className="mt-3 text-gray-600">
              Yıllardır okurlara en iyi kitapları sunma misyonuyla hizmet
              veriyoruz. Geniş yelpazemizde edebiyat, bilim, sanat, çocuk
              kitapları ve daha fazlasını bulabilirsiniz. Okuma alışkanlığını
              teşvik etmek ve kitap tutkunlarına aradıkları nadir ve popüler
              kitapları ulaştırmak için tutkulu bir ekiple çalışıyoruz. Sadece
              bir kitapçı değil, aynı zamanda okuma kültürünü güçlendiren bir
              topluluğun parçasıyız. Hem çevrimiçi hem de fiziksel mağazamızda
              zengin koleksiyonlarımıza göz atabilirsiniz.
            </p>
            <p className="mt-3 text-gray-600">
              Kitaplarımızı titizlikle seçiyor, hem yeni çıkan eserleri hem de
              klasikleşmiş başyapıtları sizlere sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
