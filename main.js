// ` `

/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {



        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_fra'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Andrea',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Come sarà il tempo domani?!?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'non so, non ho avuto il tempo di controllare',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'spero faccia bel tempo :)',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Tommaso',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Quando finirà questo lockdown',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Boh, non saprei dirti',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Paolo',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sport all\'aperto fa bene alla salute!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Preferisco andare in palestra',
                        status: 'received'
                    }
                ],
            },
        ],
        activeContact: 0,
        newMessage: '',

    },
    methods: {
      setActiveContact(index){
        console.log(index);

        this.activeContact = index;
      },

      // showChat:
        addNewMessage(index){
        if(this.newMessage.trim() !== '') {
          this.contacts[index].messages.push({
            message: this.newMessage,
            status: 'sent',
            date: dayjs().format('D/MM/YYYY HH:mm:ss')
          });
          console.log(newMessage);
          this.newMessage = '';

        }
      }
    }
});
