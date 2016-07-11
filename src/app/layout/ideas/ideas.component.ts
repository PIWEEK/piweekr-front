import {Component, Input} from "@angular/core";
import {VerticalListComponent} from "../../components/vertical-list/vertical-list.component";
import {CardContainerComponent} from "../../components/card-container/card-container.component";

@Component({
    selector: "ideas-layout",
    templateUrl: "./app/layout/ideas/ideas.component.html",
    styleUrls: ["./app/layout/ideas/ideas.component.css"],
    directives: [VerticalListComponent, CardContainerComponent]
})

export class IdeasComponent {
    @Input() selectedItem: any;
    type: string = 'Ideas';
    items = [{
        comments_count: 3,
        created_at: "2016-07-11T16:25:13.112432",
        is_public: true,
        title: "Detector de metano",
        uuid: "q8h89asdhfb93c8b9",
        description: "La idea es simple: Un Arduino conectado a una Raspberri PI que a su vez tenga un detector de gases que consulte a través de fruskis a unos datos de bigdata repository on the cloud with diamonds que nos de una aproximación empírica de cuánto huele a caca en el WC",
        owner: {
            email: "pepito@delospalotes.es",
            user_name: "pepito",
            full_name: "Pepito el de los Palotes",
            avatar: ""
        },
        forked_from: null
    },
    {
        comments_count: 0,
        created_at: "2016-07-11T17:30:15.442647",
        is_public: false,
        title: "Gimnasio virtual",
        uuid: "9adfsnansyhr234hor283",
        description: "CUÁNTAS VECES habeis mentido a vuestra pareja diciendo que ibais al gimnasio cuando en realidad os bajabais al bar a tomaros unos cuba-libres. Se acabo el inventar excusas!! con el revolucionario…",
        owner: {
            email: "fulanito@perez.org",
            user_name: "fulanito",
            full_name: "Fulanito Pérez",
            avatar: ""
        },
        forked_from: null
    },
    {
        comments_count: 10,
        created_at: "2016-07-12T03:45:18.3335556",
        is_public: true,
        title: "πweekr",
        uuid: "32498fjerfhfhr79rr",
        description: "La idea es aglomerar en una aplicacion toda la “vida” de la piweek. Desde que empieza una nueva edicion a la promocion de los proyectos y la gestion del hype previo. Ademas tambien servira como escaparate a los…",
        owner: {
            email: "fulanito@perez.org",
            user_name: "fulanito",
            full_name: "Fulanito Pérez",
            avatar: ""
        },
        forked_from: null
    }];
    handleSelected(item: string) {
        this.selectedItem = item;
    };
}
