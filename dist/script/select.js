var arr = [
    ['Amalie Beauty Studio', 'Profi Touch', "Zarin Style", "Tomiris Nail Studio", "Mystic Spa (Health & Beauty)", "FS Studio", "Анталия 3", "La Letti", "Истанбол", "Grace", "Bigudini", "Велла", "Алтынай", "VERRA Beauty Bar", "GoldWell", "Милена", "Lash House Beauty", "Jibsnails&Beauty", "Lisap Milano", "BIG BRO barber shop", "Мир Красоты", "Елена", "Керемет"],
    ['Beauty Showroom', 'Prestige', 'Beatrise', 'Akinay Beauty Maker', 'LAKSHMI Salon kg', 'Belladonna', 'Зухра', 'Бейне', 'Diva Effect', 'Lolita', 'Beauty and Barber AVALON', 'Алмаз', 'Sofi Line', 'Элиталь', 'Мэрэлина', 'Мариша', 'Шарм', 'Barbershef', 'Mon Ami', 'Бонэ', 'Life Style', 'Sono Nails','Imperatriz Beauty', 'Preen Beauty Studio', 'WildMan Barbershop', 'Барыш', 'Fresh Style', 'Березка', 'Loft Beauty', 'OldBoy Barbershop', 'CHOP CHOP', 'Beauty Art', 'Аделина', 'Lebel', 'Кыз Жибек', 'Selective Professional'],
    ['Samira', 'Lashmaker.kg', 'M_nails studio', 'Красотка', 'У Эрмека', 'Даяна', 'Alexandra Lash Studio', 'Aidina.lashes.ks', 'Карэ', 'Стиль', 'Жизель', 'Best', 'М Арт', 'Адис', 'Рахат М', 'Ажар Style'],
    ['Каприз', 'Царевна', 'Malina.kg', 'Сирена', 'Кристалл', 'Мадам', 'Империя Стиля', 'Бэлл', 'Чародейка', 'Vip lashes', 'Lovely Mama', 'SUJI', 'Гармония', 'Grimerka', 'Эллада', 'Mary Reys', 'Карэ Классик', 'Студия перманентного макияжа Каныкей Кадырбаевой'],
    ['Belle', 'Beauty9 Nine', 'Michelle', 'Sun Max', ' Селебрити', 'Capous Cosmetics', 'laminirovanie_beaute_bishkek', 'Моне', 'ОН И ОНА', 'DIORA', 'Viola'],
    ['Эстетик Арт Студия', 'Контур', 'Фиори', 'Лоранж', 'Fresh Style', 'DOLLS', 'Стилиссимо', 'Nail.kg'],
    ['La Letty студия эпиляции', 'Геральдина', 'Комильфо', 'G.Nails Studio', 'Retro Style', 'Золушка', 'Айым Салон', 'Mama stylist', 'Viva', 'Donna', 'Мишель'],
    ['Ак Куу', 'DATKA Style', 'Нарзан', 'Нур'],
    ['УСЛУГИ И КУРСЫ ВИЗАЖИСТА В БИШКЕКЕ', 'Территория Красоты', 'Nail Service Master - Alina', 'Merci', 'Aleta', 'Ak-kuu', 'Ideal'],
    ['Локон', 'Mimi Nail', 'Фея', 'Идеал', 'Nur Beauty Studio'],
    ['"Rocky" Barber shop', '"Marshal" Barber shop', 'Мария', 'Мария'],
    ['Шико', 'Орхидея'],
    ['EVVI Оранжерея красоты', 'Gold Lady', 'La Letty студия эпиляции', 'Happy'],
    ['Венеция', 'Афродита', 'Версаль', 'Наташа', 'АЗАЛИЯ', 'Адель'],
    ['Элен', 'Монэ', 'Ginger Club'],
    ['ДАРЬЯ'],
    ['ОдаЛюкс', 'VOGUE', 'KRUEGER', '"Marshal" Barber shop'],
    ['БЕРМЕТ'],
    ['Я', 'Имидж-студия "Диадема"'],
    ['Зал Красоты Оксаны Ким', 'SPA Territory', 'Эстетик', 'Hairmaster', 'Madision Salon', 'On studio', 'Аруумед', 'Айлин', 'Кейко Студио', 'Адам И Ева', 'Real Stealth', 'Nail studio Diamonds', 'K-studio', 'ГУЛИЗА Style', 'Амели', 'Lisap Milano', 'Каныкей', 'VIP'],
]

document.getElementById('district').onchange = function(event) {
    var barbersSelect = document.getElementById('barbers');
    barbersSelect.options.length = 0;

    var selectedBarbers = arr[event.target.value];

    for (var i = 0; i < selectedBarbers.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = selectedBarbers[i];
        barbersSelect.appendChild(opt);
    }
}