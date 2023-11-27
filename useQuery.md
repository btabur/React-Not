# React Query Hook Nedir?

Bu bölümde sizlere react query kancasının ne olduğunu, özelliklerini, işlevlerini, avantajlarını ve nasıl kullanıldığını anlatmaya çalışacağım.

Öncelikle react query nedir sorusunu cevaplamaya çalışalım.

![](/public/react-query.jpeg)

React Query, geliştiricilerin React uygulamalarındaki uzak verileri yönetmesine ve senkronize etmesine yardımcı olan güçlü bir kitaplıktır. Veri alma, önbelleğe alma ve güncelleme işlemlerini bildirimsel bir şekilde gerçekleştirmek için etkili ve sezgisel bir yol sağlar. Geliştiriciler, React Query ile API'lerden kolayca veri alabilir, yükleme ve hata durumlarını yönetebilir ve kullanıcı arayüzünü en son veri değişikliklerine göre güncelleyebilir.
React Query, özünde sorgu kavramı etrafında döner. Sorgu, API gibi uzak bir kaynaktan veri getiren eşzamansız bir işlemdir. React Query, geliştiricilerin basit ve etkileyici bir sözdizimi kullanarak sorguları tanımlamasına olanak tanıyarak verileri getirmeyi ve isteğin yükleme, başarı ve hata gibi çeşitli aşamalarını yönetmeyi kolaylaştırır. 
React Query'nin temel özelliklerinden biri yerleşik önbellekleme mekanizmasıdır. Bir sorgu yürütüldüğünde, React Query sonucu otomatik olarak önbelleğe alır ve yeni bir ağ isteği yapmak yerine aynı verilere yönelik sonraki isteklerin önbellekten sunulmasına olanak tanır. Bu, gereksiz ağ trafiğini azaltarak uygulamanın performansını artırmaya yardımcı olur. React Query ayrıca önbelleğe alınmış veriler için yaşam süresi ayarlamak veya gerektiğinde önbelleği manuel olarak geçersiz kılmak gibi önbellek davranışını kontrol etmeye yönelik seçenekler de sağlar.
React Query'nin bir diğer önemli özelliği de iyimser güncellemeleri desteklemesidir. İyimser güncellemeler, geliştiricilerin kullanıcı etkileşimlerinden hemen sonra, hatta gerçek API isteği tamamlanmadan önce kullanıcı arayüzünü güncellemelerine olanak tanır. Kullanıcı arayüzü güncellemeleri ağ gecikmesine bağlı olmadığından bu, sorunsuz ve duyarlı bir kullanıcı deneyimi sağlar. React Query, iyimser güncellemenin sunucu yanıtıyla senkronizasyonunu yöneterek kullanıcı arayüzünün her zaman sunucu verileriyle senkronize olmasını sağlar.
React Query, önbelleğe alma ve iyimser güncellemelerin yanı sıra yerleşik hata işleme, sayfalandırma desteği ve otomatik sorgu yeniden denemeleri gibi başka güçlü özellikler de sağlar. Esnek ve genişletilebilir mimarisi, geliştiricilerin işlevselliğini kendi özel gereksinimlerine uyacak şekilde özelleştirmesine ve genişletmesine olanak tanır. Geliştiriciler, React Query ile karmaşık veri odaklı uygulamaları kolaylıkla oluşturabilir, standart kod miktarını azaltabilir ve genel geliştirme üretkenliğini artırabilir.
UseQuery kancası çağrıldığında, sorgunun geçerli durumunu içeren bir nesneyi döndürür. Buna isLoading, isError ve data gibi özellikler dahildir. Bu özellikler, sorgunun durumuna göre farklı bileşenleri koşullu olarak oluşturmak için kullanılabilir. Örneğin, veri alınırken bir loading spinner gösterebiliriz, bir hata oluşursa bir hata mesajı görüntüleyebilir ve veri başarıyla getirildikten sonra veriyi işleyebiliriz. UseQuery kancası ayrıca gerektiğinde verileri manuel olarak yeniden getirmek için kullanılabilecek bir yeniden getirme işlevi de sağlar.
-	useQuery
React Query'de API isteklerini yönetmek için "useQuery" ve "useMutation" kancalarını kullanabilirsiniz. 'useQuery' kancası, bir API uç noktasından veri almanıza olanak tanır ve durumu sizin için otomatik olarak yönetir. API uç noktasını, önbelleğe alma davranışını ve diğer parametreleri belirtme seçenekleri sunar. Döndürülen verilere 'data' özelliği aracılığıyla erişilebilir ve herhangi bir hata veya yükleme durumu, 'error' ve 'isLoading' özellikleri kullanılarak kontrol edilebilir.
-	useMutation
'useMutation' kancası ise sunucudaki verileri değiştiren API istekleri yapmak için kullanılır. Veri oluşturma, güncelleme veya silme gibi işlemleri gerçekleştirmenin kolay bir yolunu sağlar. 'useQuery' gibi, aynı zamanda durumu sizin için yönetir ve hataları ve yükleme durumlarını kontrol etmek için özellikler sağlar. Ek olarak, API isteğini tetiklemek ve yerel önbelleği otomatik olarak güncellemek için kullanabileceğiniz bir "değiştirme" işlevi sağlar.
React Query ile API isteklerini verimli bir şekilde işleyebilir ve elde edilen verileri React uygulamalarınızda kolayca yönetebilirsiniz. 'useQuery' ve 'useMutation' kancalarını kullanarak, durumu manuel olarak yönetme endişesi duymadan API uç noktalarından veri alıp değiştirebilirsiniz. Bu, uygulamanızın kullanıcı arayüzünü ve mantığını oluşturmaya daha fazla odaklanmanıza olanak tanırken React Query, sahne arkasında veri getirme ve senkronizasyonla ilgilenir. Genel olarak React Query, API isteklerini işleme sürecini basitleştirerek onu React geliştiricileri için değerli bir araç haline getirir.
Yukarıdakiler ile beraber bir sorgu dili kullanılarak bir veritabanından veya veri kümesinden belirli bilgilerin talep edilmesi sürecini ifade eder. Sorgular, belirli koşullara ve kriterlere göre verileri ayıklamak, filtrelemek ve değiştirmek için kullanılır.

## Kullanımı
öncelikle react query projmize indirmemiz lazım
`npm install react-query`
ardından index.js dosyasına aşağıdaki kodu eklemeyi  unutmayın.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById("root")
);
```

```jsx
import { useQuery } from 'react-query';

function BlogPosts() {

const { data, isLoading, isError } = useQuery('blogPosts', () =>

fetch('/api/blogposts').then((response) => response.json())
);

if (isLoading) {
return <div>Loading...</div>;
}

if (isError) {
return <div>Error occurred while fetching blog posts</div>;
}

return (
<div>
    {data.map((post) => (

    <div key={post.id}>{post.title}</div>

    ))}
</div>
)}
```

- useQuery hook, 'isLoading' ve 'isError' özellikleri aracılığıyla erişebildiğimiz yükleme ve hata durumlarını bizim için otomatik olarak yönetir. Veriler başarılı bir şekilde alındıktan sonra, ona 'data' özelliği aracılığıyla erişebilir ve blog gönderilerinin listesini oluşturabiliriz.


```jsx
import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const mutation = useMutation((newPost) =>
        axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
    );

    const submitData = () => {
        mutation.mutate({ title, body });
    };

    if (mutation.isLoading) {
        return <span>Submitting...</span>;
    }

    if (mutation.isError) {
        return <span>Error: {mutation.error.message}</span>;
    }

    if (mutation.isSuccess) {
        return <span>Post submitted!</span>;
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button onClick={submitData}>Submit</button>
        </div>
    );
};
export default CreatePost;
```

- useQueryClient hook
 Sorgu istemcisi, uygulamadaki tüm sorguların ve mutasyonların yönetilmesinden sorumludur. UseQueryClient kancasını kullanarak, sorgular ve mutasyonlarla etkileşim kurmak için sorgu istemcisi tarafından sağlanan çeşitli yöntemlere ve özelliklere erişebilirsiniz.
UseQueryClient kancasının temel işlevlerinden biri sorguları geçersiz kılmak ve yeniden getirmektir. Sorgu istemcisi örneğiyle, belirli bir sorguyu veya bir sorgu grubunu geçersiz kılmak için voidateQueries yöntemini çağırabilirsiniz. Bu, özellikle bir mutasyon gerçekleştirdikten sonra bileşeninizde görüntülenen verileri güncellemeniz gerektiğinde veya verileri düzenli aralıklarla yenilemek istediğinizde kullanışlıdır. Ayrıca refetchQueries yöntemi, bir sorguyu veya bir grup sorguyu zorla yeniden getirmenize olanak tanıyarak her zaman en güncel verilere sahip olmanızı sağlar.