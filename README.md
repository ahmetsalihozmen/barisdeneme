<h1>Tanıtım</h1>

Merhabalar bu projede yapmak istediğim şey sahibinden.com da ilan açarken en zorlandığımız kısım genellikle bir başlık koyma ya da ilandaki detayları nasıl doldurmamız gerektiği oluyor. Bunu kolaylaştırmak için bir ranking uygulaması yapmaya karar verdim. Uygulamada kullanıcı ister real estate ister shopping kategorisindeki ilanları birbiriyle karşılaştıracak. Ekranına 2 tane ilan gelen kullanıcı hangi ilan daha ilgi çekici olduğunu seçerek ilanları puanlayabilecek. Bu sayede ana ekranda en yüksek ve en düşük puanlı ilanları görebileceğiz. 

Projeyi açabilmeniz için sadece bu repodaki programı "npm run dev" komutu kullanarak çalıştırabilirsiniz.

<h1> Yaptiklarim</h1>

Ben uygulamayı yazarken Next.js kütüphanesini kullanarak frontend ve backend kısmını aynı uygulama içerisinde kullandım. Database olarak ise mongodb kullandım. İlk olarak bize verilen api üzerinden 150 taneye yakın ilan çektim. Eğer daha fazla çekseydim ranking işlemini yapmamız için çok fazla sayıda seçim yapmamız gerekiyordu bu yüzden gözle rahat bir şekilde görebileceğimiz sayıda bir veri aldım. İlk olarak bizi 2 türde ilanın olduğu bir ekran karşılıyor. Bu ekranda istediğimiz kategoridan ilanları karşılaştırabiliyoruz. Eğer istersek de ana menüde ilanın üzerine tıklayıp ilanı daha detaylı görebiliyoruz. Ayrica kategorilerin yanındaki ok tuşlarına basarak en yüksekten en düşüğe doğru ilanları sıralayabiliyoruz. İlk başta gelen ilanlar karışık sırada gelmektedir. Sonrasinda ise ilanlar puanlarına göre sıralanmaktadır.

Karşılaştırma ekranına geldiğimizde bizi 2 tane farklı ilan karşılıyor. Burada yapmamız gereken şey hangi ilanı daha çok beğendiysek onun üzerine tıklayıp o ilanı seçmek. Seçimimizi yaptıktan sonra ilanlar puan hesaplama sistemine gidiyor. Burada normalde satranç oyuncularının sıralanması için kullanılan elo sistemini kullandım. Bu sistemde puanlama iki ilan arasında olup yaptığımız seçim sadece bu iki ilanını puanını etkiliyor. Seçim yapıldıktan sonra hemen önümüze iki farklı ilan daha geliyor ve sistemde seçim yapmaya devam ediyoruz. Şu anlık sistemin ana ekranında arama ekrani ekleyemediğim için seçim yaptığımız ilana http://localhost:3000/ilanlar/ilanid urlini girerek tekrardan kontrol edebiliriz

<h1>Eksikler</h1>

Projede eksik olarak kullanıcınin seçim yaptığında anlık olarak yaptığı seçimin sonucunu görmesi gerektiğini düşünüyorum. Ayrıca yazılımsal olarak bazı yerleri biraz daha düzenli yazabilirdim. Bunu yanında arayüzü daha düzenli yapıp düzgün bir şekilde responsive yapabilirdim. Ayrıca ana ekranda ilanları daha kolay bulabilmek için bir arama ekranı yapabilirdim. 
