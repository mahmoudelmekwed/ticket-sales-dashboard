import { Account } from "../models/interfaces/user";

export const ticketDetails = {
    ticketNo: 'تذكرة رقم #2342'
}

export const dummyAccounts: Account[] = [
    {
      id: 1,
      userData: {
        image: '/users/user-1.jpg',
        name: 'احمد محمود',
        phoneNumber: '123-456-7890'
      },
      ticketNo: 'T001',
      ticketValue: '$12',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      personCount: 2,
      purchasingCount: 'مرة واحدة',
      ticket: {
        ticketName: 'تذكرة رقم 45.pdf',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 2,
      userData: {
        image: '/users/user-2.jpg',
        name: 'محمد الغريب',
        phoneNumber: '234-567-8901'
      },
      ticketNo: 'T002',
      ticketValue: '$15',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      personCount: 3,
      purchasingCount: 'مرة واحدة',
      ticket: {
        ticketName: 'تذكرة رقم 45.pdf',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 3,
      userData: {
        image: '',
        name: 'محمد الغريب',
        phoneNumber: '345-678-9012'
      },
      ticketNo: 'T003',
      ticketValue: '$10',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      personCount: 1,
      purchasingCount: 'مرة واحدة',
      ticket: {
        ticketName: 'تذكرة رقم 45.pdf',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 4,
      userData: {
        image: '',
        name: 'محمد الغريب',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T004',
      ticketValue: '$20',
      cinema: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة',
      personCount: 4,
      purchasingCount: 'مرة واحدة',
      ticket: {
        ticketName: 'تذكرة رقم 45.pdf',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 5,
      userData: {
        image: '/users/user-5.jpg',
        name: 'محمود عبد الله',
        phoneNumber: '567-890-1234'
      },
      ticketNo: 'T005',
      ticketValue: '$8',
      cinema: 'Cinema E',
      personCount: 1,
      purchasingCount: '2',
      ticket: {
        ticketName: 'تذكرة رقم 45.pdf',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 6,
      userData: {
        image: '/users/user-6.jpg',
        name: 'خالد علي',
        phoneNumber: '678-901-2345'
      },
      ticketNo: 'T006',
      ticketValue: '$25',
      cinema: 'Cinema F',
      personCount: 5,
      purchasingCount: '3',
      ticket: {
        ticketName: 'Premium',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 7,
      userData: {
        image: '/users/user-7.jpg',
        name: 'عمر حسن',
        phoneNumber: '789-012-3456'
      },
      ticketNo: 'T007',
      ticketValue: '$18',
      cinema: 'Cinema G',
      personCount: 3,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 8,
      userData: {
        image: '/users/user-8.jpg',
        name: 'سعيد مصطفى',
        phoneNumber: '890-123-4567'
      },
      ticketNo: 'T008',
      ticketValue: '$30',
      cinema: 'Cinema H',
      personCount: 6,
      purchasingCount: '4',
      ticket: {
        ticketName: 'Luxury',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 9,
      userData: {
        image: '/users/user-9.jpg',
        name: 'ياسر محمد',
        phoneNumber: '901-234-5678'
      },
      ticketNo: 'T009',
      ticketValue: '$14',
      cinema: 'Cinema I',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 10,
      userData: {
        image: '',
        name: 'عبد الرحمن سمير',
        phoneNumber: '012-345-6789'
      },
      ticketNo: 'T010',
      ticketValue: '$9',
      cinema: 'Cinema J',
      personCount: 1,
      purchasingCount: '3',
      ticket: {
        ticketName: 'Economy',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 11,
      userData: {
        image: '/users/user-11.jpg',
        name: 'مصطفى عماد',
        phoneNumber: '123-456-7890'
      },
      ticketNo: 'T011',
      ticketValue: '$20',
      cinema: 'Cinema K',
      personCount: 4,
      purchasingCount: '2',
      ticket: {
        ticketName: 'VIP',
        ticketDetails: '9mb . PDF'
      }
    },
    {
      id: 12,
      userData: {
        image: '/users/user-12.jpg',
        name: 'خليل احمد',
        phoneNumber: '234-567-8901'
      },
      ticketNo: 'T012',
      ticketValue: '$22',
      cinema: 'Cinema L',
      personCount: 3,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard admission with 3D glasses'
      }
    },
    {
      id: 13,
      userData: {
        image: '/users/user-13.jpg',
        name: 'احمد عبد الرحمن',
        phoneNumber: '345-678-9012'
      },
      ticketNo: 'T013',
      ticketValue: '$16',
      cinema: 'Cinema M',
      personCount: 2,
      purchasingCount: '2',
      ticket: {
        ticketName: 'Premium',
        ticketDetails: 'Premium seating with recliners'
      }
    },
    {
      id: 14,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 15,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 16,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 17,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 18,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 19,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 20,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 21,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 22,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 23,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 24,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 25,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 26,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 27,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 28,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 29,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 30,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 31,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 32,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 33,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 34,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 35,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 36,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    },
    {
      id: 37,
      userData: {
        image: '',
        name: 'عبد الله حسن',
        phoneNumber: '456-789-0123'
      },
      ticketNo: 'T014',
      ticketValue: '$12',
      cinema: 'Cinema N',
      personCount: 2,
      purchasingCount: '1',
      ticket: {
        ticketName: 'Standard',
        ticketDetails: 'Standard seating'
      }
    }
  ];
  