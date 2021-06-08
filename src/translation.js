import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    eng: {
        translation: {
            "title": "It's my life",
            "text": `My name is Angélica Summer, I am 12 years old and I am Canadian. 5 years ago my family and I moved to the south of France. My father, Frank Summer, is a mechanic; he loves vintage cars and collects miniature cars.

            My mother's name is Emilie Summer; she is a nurse in a hospital not far from our house. We moved to France, because she has always loved the culture of this country.
            
            Life in France is very different from that in Canada. It is always hot here. Every Sunday we go to the beautiful Biarritz beach and buy ice cream after swimming in the sea.
            
            The French are very friendly and welcoming. We speak French when we are outside, at school or at the market. However, we still speak English at home, as my parents don't want me to lose my native language.`
        }
    },
    fr: {
        translation: {
            "title": "C'est ma vie",
            "text": `Je m'appelle Angélica Summer, j'ai 12 ans et je suis canadienne. Il y a 5 ans, ma famille et moi avons déménagé dans le sud de la France. Mon père, Frank Summer, est mécanicien ; il adore les voitures anciennes et collectionne les voitures miniatures.

            Ma mère s'appelle Emilie Summer ; elle est infirmière dans un hôpital non loin de notre maison. Nous avons déménagé en France, parce qu'elle a toujours aimé la culture de ce pays.
            
            La vie en France est très différente de celle au Canada. Ici, il fait toujours chaud. Chaque dimanche, nous allons à la magnifique plage de Biarritz et nous achetons des glaces après avoir nagé dans la mer.
            
            Les Français sont très sympathiques et accueillants. Nous parlons français lorsque nous sommes dehors, à l'école ou au marché. Cependant, nous continuons de parler anglais à la maison, car mes parents ne veulent pas que je perde ma langue natale.`
        }
    },
    ar: {
        translation: {
            "title": "هذه حياتي",
            "text": `اسمي أنجليكا صيف ، عمري 12 عامًا وأنا كندي. قبل 5 سنوات انتقلت أنا وعائلتي إلى جنوب فرنسا. والدي فرانك سمر ميكانيكي. يحب السيارات القديمة ويجمع السيارات المصغرة.

اسم والدتي إميلي سمر ؛ هي ممرضة في مستشفى ليست بعيدة عن منزلنا. انتقلنا إلى فرنسا ، لأنها كانت دائما تحب ثقافة هذا البلد.

تختلف الحياة في فرنسا كثيرًا عن تلك الموجودة في كندا. دائما الجو حار هنا. نذهب كل يوم أحد إلى شاطئ بياريتز الجميل ونشتري الآيس كريم بعد السباحة في البحر.

الفرنسيون ودودون للغاية ومرحبون. نتحدث الفرنسية عندما نكون بالخارج أو في المدرسة أو في السوق. ومع ذلك ، ما زلنا نتحدث الإنجليزية في المنزل ، حيث لا يريد والداي أن أفقد لغتي الأم.`
        }
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'eng',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;