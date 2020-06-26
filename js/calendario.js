document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [{
                title: 'Vacunacion etapa 1',
                start: '2020-06-03',
                end: '2020-06-10'
            },
            {
                title: 'Vacunacion etapa 2',
                start: '2020-06-30',
                end: '2020-07-11'
            },
            {
                title: 'Vacunacion etapa 3',
                start: '2020-07-25',
                end: '2020-07-30'
            },
            {
                title: 'Vacunacion adultos mayores',
                start: '2020-07-03',
            },
            {
                title: 'Retiro de estudios',
                start: '2020-07-14',
            }
        ]
    });

    calendar.render();
});