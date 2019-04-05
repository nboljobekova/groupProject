var arr = [
    ['Amalie Beauty Studio', 'Profi Touch', "Zarin Style", "Tomiris Nail Studio", "Mystic Spa (Health & Beauty)", "FS Studio", "Анталия 3", "La Letti", "Истанбол", "Grace", "Bigudini", "Велла", "Алтынай", "VERRA Beauty Bar", "GoldWell", "Милена", "Lash House Beauty", "Jibsnails&Beauty", "Lisap Milano", "BIG BRO barber shop", "Мир Красоты", "Елена", "Керемет"],
    ['se1', 'Soq2'],
    ['Swe1', 'Somcasde2'],
    ['Som11e1', 'sss'],
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