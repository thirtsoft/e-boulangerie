import{b as U,c as G,f as J,i as Q,j as W,k as K,n as X}from"./chunk-E2GX36PD.js";import{c as Y}from"./chunk-J45HJZ7I.js";import{k as j,l as R}from"./chunk-MASZLZ5U.js";import{Bb as L,Eb as V,Ha as z,Jb as D,Kb as B,Sa as h,T as A,Ta as M,Ua as I,Va as F,Wa as _,Xa as v,Y as g,Ya as u,Z as f,Za as n,_a as i,db as w,ea as b,hb as p,jb as c,ob as $,pb as S,qb as a,rb as m,sa as s,sb as P,tb as y,ub as H,yb as N}from"./chunk-QBVJODZE.js";var T=(r,t)=>t.value,ne=(r,t)=>t.id,ee=(r,t)=>t.nom;function ie(r,t){if(r&1&&(n(0,"option",8),a(1),i()),r&2){let e=t.$implicit;u("value",e.value),s(),m(e.label)}}function oe(r,t){if(r&1&&(n(0,"option",8),a(1),i()),r&2){let e=t.$implicit;u("value",e.value),s(),m(e.label)}}function ae(r,t){if(r&1&&(n(0,"option",8),a(1),i()),r&2){let e=t.$implicit;u("value",e),s(),m(e)}}function re(r,t){if(r&1&&(n(0,"option",8),a(1),i()),r&2){let e=t.$implicit;u("value",e.value),s(),m(e.label)}}function le(r,t){if(r&1&&(n(0,"span",33),a(1),i()),r&2){let e=t.$implicit;s(),y("",e.quantite,"x ",e.nom)}}function se(r,t){if(r&1&&(n(0,"span",34),a(1),i()),r&2){let e=c().$implicit;s(),P("+",e.produits.length-2)}}function de(r,t){if(r&1&&(n(0,"span",38),a(1),L(2,"slice"),i()),r&2){let e=c().$implicit;u("title",N(e.note)),s(),y(" \u{1F4DD} ",V(2,4,e.note,0,50),"",e.note.length>50?"...":""," ")}}function pe(r,t){r&1&&(n(0,"span",39),a(1,"\u2014"),i())}function ce(r,t){if(r&1){let e=w();n(0,"tr",25),p("click",function(){let l=g(e).$implicit,d=c();return f(d.voirDetails(l))}),n(1,"td",26)(2,"span",27),a(3),i()(),n(4,"td",28),a(5),i(),n(6,"td",29)(7,"span",30),a(8),i()(),n(9,"td",31)(10,"strong"),a(11),i(),n(12,"div",32),_(13,le,2,2,"span",33,ee),h(15,se,2,1,"span",34),i()(),n(16,"td",35)(17,"span",36),a(18),i()(),n(19,"td",37),h(20,de,3,8,"span",38)(21,pe,2,0,"span",39),i(),n(22,"td",40)(23,"strong",41),a(24),i()()()}if(r&2){let e=t.$implicit,o=c();s(3),P("#",e.id),s(2),m(o.formatDate(e.date)),s(2),S(e.type),s(),y(" ",o.getTypeInfo(e.type).icon," ",o.getTypeInfo(e.type).label," "),s(3),m(e.destinataire),s(2),v(e.produits.slice(0,2)),s(2),M(e.produits.length>2?15:-1),s(2),S(o.getStatutInfo(e.statut).class),s(),y(" ",o.getStatutInfo(e.statut).icon," ",o.getStatutInfo(e.statut).label," "),s(2),M(e.note?20:21),s(4),m(o.formatCFA(e.total))}}function me(r,t){if(r&1){let e=w();n(0,"tr")(1,"td",42)(2,"div",43)(3,"span",44),a(4,"\u{1F4ED}"),i(),n(5,"p"),a(6,"Aucune commande trouv\xE9e"),i(),n(7,"button",45),p("click",function(){g(e);let l=c();return f(l.resetFiltres())}),a(8,"R\xE9initialiser les filtres"),i()()()()}}function ue(r,t){if(r&1&&(n(0,"option",8),a(1),i()),r&2){let e=t.$implicit;u("value",e),s(),m(e)}}function ge(r,t){r&1&&(n(0,"span",51),a(1,"..."),i())}function fe(r,t){if(r&1){let e=w();n(0,"button",53),p("click",function(){g(e);let l=c().$implicit,d=c(2);return f(d.changePage(l))}),a(1),i()}if(r&2){let e=c().$implicit,o=c(2);$("active",o.currentPage()===e),s(),P(" ",e," ")}}function xe(r,t){if(r&1&&h(0,ge,2,0,"span",51)(1,fe,2,3,"button",52),r&2){let e=t.$implicit;M(e===-1?0:1)}}function be(r,t){if(r&1){let e=w();n(0,"div",23)(1,"div",46)(2,"span"),a(3),i(),n(4,"div",47)(5,"label"),a(6,"Afficher :"),i(),n(7,"select",48),p("ngModelChange",function(l){g(e);let d=c();return f(d.changeItemsPerPage(l))}),_(8,ue,2,2,"option",8,F),i()()(),n(10,"div",49)(11,"button",50),p("click",function(){g(e);let l=c();return f(l.changePage(l.currentPage()-1))}),a(12," \xAB "),i(),_(13,xe,2,1,null,null,I),n(15,"button",50),p("click",function(){g(e);let l=c();return f(l.changePage(l.currentPage()+1))}),a(16," \xBB "),i()()()}if(r&2){let e=c();s(3),H(" ",(e.currentPage()-1)*e.itemsPerPage()+1," - ",e.Math.min(e.currentPage()*e.itemsPerPage(),e.commandesFiltrees().length)," sur ",e.commandesFiltrees().length," commandes "),s(4),u("ngModel",e.itemsPerPage()),s(),v(e.itemsPerPageOptions),s(3),u("disabled",e.currentPage()===1),s(2),v(e.getPageNumbers()),s(2),u("disabled",e.currentPage()===e.totalPages())}}function Ce(r,t){if(r&1&&a(0),r&2){let e=c(2);P(" ",e.selectedCommande().note," ")}}function _e(r,t){r&1&&(n(0,"em"),a(1,"Aucune observation"),i())}function ve(r,t){if(r&1&&(n(0,"tr")(1,"td",81),a(2),i(),n(3,"td",82),a(4),i(),n(5,"td",83),a(6),i(),n(7,"td",84),a(8),i()()),r&2){let e=t.$implicit,o=c(2);s(2),m(e.nom),s(2),m(e.quantite),s(2),m(o.formatCFA(e.prix)),s(2),m(o.formatCFA(e.quantite*e.prix))}}function he(r,t){if(r&1){let e=w();n(0,"div",54),p("click",function(){g(e);let l=c();return f(l.fermerModal())}),n(1,"div",55),p("click",function(l){return g(e),f(l.stopPropagation())}),n(2,"div",56)(3,"h3"),a(4,"\u{1F4CB} D\xE9tails de la commande"),i(),n(5,"div",57)(6,"button",58),p("click",function(){g(e);let l=c();return f(l.imprimerPDF())}),a(7," \u{1F5A8}\uFE0F Imprimer "),i(),n(8,"button",59),p("click",function(){g(e);let l=c();return f(l.fermerModal())}),a(9,"\u2715"),i()()(),n(10,"div",60)(11,"div",61)(12,"div",62)(13,"div",63)(14,"span",64),a(15,"N\xB0 commande"),i(),n(16,"span",65),a(17),i()(),n(18,"div",63)(19,"span",64),a(20,"Date"),i(),n(21,"span",66),a(22),i()(),n(23,"div",63)(24,"span",64),a(25,"Type"),i(),n(26,"span",66)(27,"span",67),a(28),i()()(),n(29,"div",63)(30,"span",64),a(31,"Destinataire"),i(),n(32,"span",68),a(33),i()(),n(34,"div",63)(35,"span",64),a(36,"Statut"),i(),n(37,"span",66)(38,"span",69),a(39),i()()(),n(40,"div",70)(41,"span",64),a(42,"Observations"),i(),n(43,"span",71),h(44,Ce,1,1)(45,_e,2,0,"em"),i()()()(),n(46,"div",72)(47,"div",73),a(48,"\u{1F4E6} Produits command\xE9s"),i(),n(49,"table",74)(50,"thead")(51,"tr")(52,"th"),a(53,"Produit"),i(),n(54,"th"),a(55,"Quantit\xE9"),i(),n(56,"th"),a(57,"Prix unitaire"),i(),n(58,"th"),a(59,"Total"),i()()(),n(60,"tbody"),_(61,ve,9,4,"tr",null,ee),i(),n(63,"tfoot")(64,"tr",75)(65,"td",76)(66,"strong"),a(67,"Total g\xE9n\xE9ral"),i()(),n(68,"td")(69,"strong",77),a(70),i()()()()()()(),n(71,"div",78)(72,"button",79),p("click",function(){g(e);let l=c();return f(l.imprimerPDF())}),a(73," \u{1F5A8}\uFE0F Imprimer la facture "),i(),n(74,"button",80),p("click",function(){g(e);let l=c();return f(l.fermerModal())}),a(75,"Fermer"),i()()()()}if(r&2){let e=c();s(17),P("#",e.selectedCommande().id),s(5),m(e.formatDateLong(e.selectedCommande().date)),s(5),S(e.selectedCommande().type),s(),y(" ",e.getTypeInfo(e.selectedCommande().type).icon," ",e.getTypeInfo(e.selectedCommande().type).label," "),s(5),m(e.selectedCommande().destinataire),s(5),S(e.getStatutInfo(e.selectedCommande().statut).class),s(),y(" ",e.getStatutInfo(e.selectedCommande().statut).icon," ",e.getStatutInfo(e.selectedCommande().statut).label," "),s(5),M(e.selectedCommande().note?44:45),s(17),v(e.selectedCommande().produits),s(9),m(e.formatCFA(e.selectedCommande().total))}}var Z=class r{router=A(Y);Math=Math;showDetailsModal=b(!1);selectedCommande=b(null);filtreNumero=b("");filtreStatut=b("tous");filtreType=b("tous");filtreMois=b("tous");filtreAnnee=b("toutes");currentPage=b(1);itemsPerPage=b(10);itemsPerPageOptions=[5,10,20,50,100];allCommandes=b([{id:"CMD001",date:new Date(2024,2,15,10,30),type:"livreur",destinataire:"Moussa Thiaw",produits:[{nom:"Baguette tradition",quantite:50,prix:500},{nom:"Croissant",quantite:30,prix:450},{nom:"Pain au chocolat",quantite:20,prix:500}],total:48500,statut:"livree",note:"Livraison effectu\xE9e avec succ\xE8s - Client tr\xE8s satisfait"},{id:"CMD002",date:new Date(2024,2,14,9,15),type:"livreur",destinataire:"Ibrahima Sow",produits:[{nom:"Baguette compl\xE8te",quantite:40,prix:600},{nom:"Palmier",quantite:25,prix:400}],total:34e3,statut:"livree",note:""},{id:"CMD003",date:new Date(2024,2,10,14,0),type:"fournisseur",destinataire:"Grands Moulins de Dakar",produits:[{nom:"Farine T55",quantite:100,prix:650},{nom:"Levure fra\xEEche",quantite:20,prix:4500}],total:155e3,statut:"livree",note:"Commande re\xE7ue en bon \xE9tat"},{id:"CMD004",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"annulee",note:"Annul\xE9 pour rupture de stock fournisseur"},{id:"CMD005",date:new Date(2024,1,20,8,30),type:"livreur",destinataire:"Omar Faye",produits:[{nom:"Pain de campagne",quantite:25,prix:800},{nom:"\xC9clair au chocolat",quantite:15,prix:650}],total:29750,statut:"livree",note:""},{id:"CMD006",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"livree",note:"Livr\xE9e partielle par le fournisseur"},{id:"CMD007",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"annulee",note:"Annul\xE9 pour rupture de stock fournisseur"},{id:"CMD008",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"annulee",note:"Annul\xE9 pour rupture de stock fournisseur"},{id:"CMD009",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"annulee",note:"Annul\xE9 pour rupture de stock fournisseur"},{id:"CMD0010",date:new Date(2024,2,5,11,45),type:"fournisseur",destinataire:"Soci\xE9t\xE9 Laiti\xE8re du S\xE9n\xE9gal",produits:[{nom:"Beurre 84%",quantite:30,prix:5200},{nom:"Oeufs frais",quantite:15,prix:3500}],total:208500,statut:"annulee",note:"Annul\xE9 pour rupture de stock fournisseur"}]);anneesDisponibles=D(()=>{let t=new Date().getFullYear(),e=[];for(let o=t;o>=2020;o--)e.push(o.toString());return e});moisDisponibles=[{value:"tous",label:"Tous les mois"},{value:"1",label:"Janvier"},{value:"2",label:"F\xE9vrier"},{value:"3",label:"Mars"},{value:"4",label:"Avril"},{value:"5",label:"Mai"},{value:"6",label:"Juin"},{value:"7",label:"Juillet"},{value:"8",label:"Ao\xFBt"},{value:"9",label:"Septembre"},{value:"10",label:"Octobre"},{value:"11",label:"Novembre"},{value:"12",label:"D\xE9cembre"}];statutsDisponibles=[{value:"tous",label:"Tous"},{value:"en_attente",label:"\u23F3 En attente"},{value:"validee",label:"\u2713 Valid\xE9e"},{value:"livree",label:"\u2705 Livr\xE9e"},{value:"annulee",label:"\u274C Annul\xE9e"}];typesDisponibles=[{value:"tous",label:"Tous"},{value:"livreur",label:"\u{1F3CD}\uFE0F Livreur"},{value:"fournisseur",label:"\u{1F3ED} Fournisseur"}];commandesFiltrees=D(()=>{let t=this.allCommandes(),e=this.filtreNumero().toLowerCase();return e&&(t=t.filter(o=>o.id.toLowerCase().includes(e))),this.filtreStatut()!=="tous"&&(t=t.filter(o=>o.statut===this.filtreStatut())),this.filtreType()!=="tous"&&(t=t.filter(o=>o.type===this.filtreType())),this.filtreAnnee()!=="toutes"&&(t=t.filter(o=>o.date.getFullYear().toString()===this.filtreAnnee())),this.filtreMois()!=="tous"&&this.filtreAnnee()!=="toutes"&&(t=t.filter(o=>(o.date.getMonth()+1).toString()===this.filtreMois())),t.sort((o,l)=>l.date.getTime()-o.date.getTime())});totalPages=D(()=>Math.ceil(this.commandesFiltrees().length/this.itemsPerPage()));commandesPaginees=D(()=>{let t=(this.currentPage()-1)*this.itemsPerPage(),e=t+this.itemsPerPage();return this.commandesFiltrees().slice(t,e)});constructor(){B(()=>{this.filtreNumero(),this.filtreStatut(),this.filtreType(),this.filtreMois(),this.filtreAnnee(),this.itemsPerPage(),this.currentPage.set(1)})}resetFiltres(){this.filtreNumero.set(""),this.filtreStatut.set("tous"),this.filtreType.set("tous"),this.filtreMois.set("tous"),this.filtreAnnee.set("toutes"),this.currentPage.set(1)}changePage(t){t>=1&&t<=this.totalPages()&&this.currentPage.set(t)}changeItemsPerPage(t){this.itemsPerPage.set(t),this.currentPage.set(1)}getPageNumbers(){let t=this.totalPages(),e=this.currentPage(),o=2,l=[];for(let d=Math.max(2,e-o);d<=Math.min(t-1,e+o);d++)l.push(d);return e-o>2&&l.unshift(-1),e+o<t-1&&l.push(-1),l.unshift(1),t!==1&&l.push(t),l}voirDetails(t){this.selectedCommande.set(t),this.showDetailsModal.set(!0)}fermerModal(){this.showDetailsModal.set(!1),this.selectedCommande.set(null)}imprimerPDF(){let t=this.selectedCommande();if(!t)return;let e=document.createElement("div");e.className="print-container",e.innerHTML=`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Facture - Commande ${t.id}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'DM Sans', 'Segoe UI', Arial, sans-serif;
            padding: 40px;
            background: white;
            color: #3D3028;
          }
          .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #C1654A;
          }
          .print-logo {
            font-size: 48px;
            margin-bottom: 10px;
          }
          .print-title {
            font-size: 24px;
            font-weight: bold;
            color: #C1654A;
            font-family: 'Playfair Display', serif;
          }
          .print-subtitle {
            font-size: 14px;
            color: #8C7B72;
            margin-top: 5px;
          }
          .info-section {
            margin-bottom: 30px;
            background: #F5F0EE;
            padding: 20px;
            border-radius: 8px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .info-item {
            display: flex;
            flex-direction: column;
          }
          .info-label {
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .info-value {
            font-size: 14px;
            font-weight: 500;
            color: #3D3028;
          }
          .info-value strong {
            color: #C1654A;
          }
          .table-section {
            margin: 30px 0;
          }
          .table-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #3D3028;
            border-left: 3px solid #C1654A;
            padding-left: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
          }
          th {
            background: #F5E6DC;
            padding: 12px;
            text-align: left;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            border-bottom: 2px solid #C1654A;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #F5E6DC;
            font-size: 13px;
          }
          .total-row {
            background: #FDF4F1;
            font-weight: bold;
          }
          .total-row td {
            border-top: 2px solid #C1654A;
            padding-top: 12px;
          }
          .grand-total {
            font-size: 18px;
            color: #C1654A;
          }
          .note-section {
            margin-top: 30px;
            padding: 15px;
            background: #F5F0EE;
            border-radius: 8px;
          }
          .note-label {
            font-size: 11px;
            font-weight: bold;
            text-transform: uppercase;
            color: #8C7B72;
            margin-bottom: 8px;
          }
          .note-content {
            font-size: 13px;
            color: #3D3028;
            line-height: 1.5;
          }
          .print-footer {
            margin-top: 40px;
            text-align: center;
            font-size: 11px;
            color: #8C7B72;
            border-top: 1px solid #F5E6DC;
            padding-top: 20px;
          }
          @media print {
            body {
              padding: 20px;
            }
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-header">
          <div class="print-logo">\u{1F956}</div>
          <div class="print-title">BOULANGERIE ROSE</div>
          <div class="print-subtitle">Facture de commande</div>
        </div>

        <div class="info-section">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">N\xB0 Commande</span>
              <span class="info-value"><strong>#${t.id}</strong></span>
            </div>
            <div class="info-item">
              <span class="info-label">Date</span>
              <span class="info-value">${this.formatDateLong(t.date)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Type de commande</span>
              <span class="info-value">${t.type==="livreur"?"\u{1F3CD}\uFE0F Livreur":"\u{1F3ED} Fournisseur"}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Destinataire</span>
              <span class="info-value"><strong>${t.destinataire}</strong></span>
            </div>
            <div class="info-item">
              <span class="info-label">Statut</span>
              <span class="info-value">${this.getStatutInfo(t.statut).icon} ${this.getStatutInfo(t.statut).label}</span>
            </div>
          </div>
        </div>

        <div class="table-section">
          <div class="table-title">\u{1F4E6} D\xE9tail des produits command\xE9s</div>
          <table>
            <thead>
              <tr>
                <th>Produit</th>
                <th style="text-align: center">Quantit\xE9</th>
                <th style="text-align: right">Prix unitaire</th>
                <th style="text-align: right">Total</th>
              </tr>
            </thead>
            <tbody>
              ${t.produits.map(l=>`
                <tr>
                  <td>${l.nom}</td>
                  <td style="text-align: center">${l.quantite}</td>
                  <td style="text-align: right">${this.formatCFA(l.prix)}</td>
                  <td style="text-align: right">${this.formatCFA(l.quantite*l.prix)}</td>
                </tr>
              `).join("")}
              <tr class="total-row">
                <td colspan="3" style="text-align: right"><strong>Total g\xE9n\xE9ral</strong></td>
                <td style="text-align: right"><strong class="grand-total">${this.formatCFA(t.total)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        ${t.note?`
          <div class="note-section">
            <div class="note-label">\u{1F4DD} Observations</div>
            <div class="note-content">${t.note}</div>
          </div>
        `:""}

        <div class="print-footer">
          <p>Merci pour votre confiance - Boulangerie Rose</p>
          <p>Ce document fait office de facture officielle</p>
          <p>G\xE9n\xE9r\xE9 le ${new Date().toLocaleDateString("fr-FR")} \xE0 ${new Date().toLocaleTimeString("fr-FR")}</p>
        </div>
      </body>
      </html>
    `;let o=window.open("","_blank");o?(o.document.write(e.innerHTML),o.document.close(),o.onload=()=>{o.print()}):alert("Veuillez autoriser les popups pour imprimer")}getStatutInfo(t){return{en_attente:{label:"En attente",class:"warning",icon:"\u23F3"},validee:{label:"Valid\xE9e",class:"info",icon:"\u2713"},livree:{label:"Livr\xE9e",class:"success",icon:"\u2705"},annulee:{label:"Annul\xE9e",class:"danger",icon:"\u274C"}}[t]||{label:t,class:"info",icon:"\u{1F4E6}"}}getTypeInfo(t){return t==="livreur"?{label:"Livreur",icon:"\u{1F3CD}\uFE0F"}:{label:"Fournisseur",icon:"\u{1F3ED}"}}formatDate(t){return new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}formatDateLong(t){return new Intl.DateTimeFormat("fr-FR",{weekday:"long",day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}formatCFA(t){return new Intl.NumberFormat("fr-FR").format(t)+" FCFA"}totalAffiche=D(()=>this.commandesPaginees().reduce((t,e)=>t+e.total,0));exporterExcel(){let t=this.commandesPaginees();if(t.length===0){alert("Aucune donn\xE9e \xE0 exporter");return}let e=t.map(C=>({"N\xB0 Commande":C.id,Date:this.formatDate(C.date),Type:C.type==="livreur"?"Livreur":"Fournisseur",Destinataire:C.destinataire,Statut:this.getStatutInfo(C.statut).label,Produits:C.produits.map(k=>`${k.quantite}x ${k.nom}`).join(", "),Observations:C.note||"-","Montant (FCFA)":C.total}));e.push({"N\xB0 Commande":"",Date:"",Type:"",Destinataire:"",Statut:"",Produits:"",Observations:"TOTAL G\xC9N\xC9RAL","Montant (FCFA)":this.totalAffiche()});let o=Object.keys(e[0]),l=[];l.push(o.join(";"));for(let C of e){let k=o.map(te=>{let E=C[te]?.toString()||"";return E=E.replace(/"/g,'""'),`"${E}"`});l.push(k.join(";"))}let d=l.join(`
`),x=new Blob(["\uFEFF"+d],{type:"text/csv;charset=utf-8;"}),O=document.createElement("a"),q=URL.createObjectURL(x);O.setAttribute("href",q),O.setAttribute("download",`commandes_${new Date().toISOString().split("T")[0]}.csv`),O.style.visibility="hidden",document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(q)}exporterPDF(){let t=this.commandesPaginees();if(t.length===0){alert("Aucune donn\xE9e \xE0 exporter");return}let e=document.createElement("div");e.className="print-container";let o=new Date().toLocaleDateString("fr-FR"),l=new Date().toLocaleTimeString("fr-FR");e.innerHTML=`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Export_Commandes_${o}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'DM Sans', Arial, sans-serif;
            padding: 30px;
            background: white;
            color: #3D3028;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #C1654A;
          }
          .logo { font-size: 48px; margin-bottom: 10px; }
          .title { font-size: 24px; font-weight: bold; color: #C1654A; font-family: 'Playfair Display', serif; }
          .subtitle { font-size: 12px; color: #8C7B72; margin-top: 5px; }
          .filters-info {
            background: #F5F0EE;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 12px;
          }
          th {
            background: #F5E6DC;
            padding: 10px 8px;
            text-align: left;
            font-weight: bold;
            border-bottom: 2px solid #C1654A;
          }
          td {
            padding: 8px;
            border-bottom: 1px solid #F5E6DC;
          }
          .total-row {
            background: #FDF4F1;
            font-weight: bold;
          }
          .total-row td {
            border-top: 2px solid #C1654A;
          }
          .grand-total {
            font-size: 14px;
            color: #C1654A;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #8C7B72;
            border-top: 1px solid #F5E6DC;
            padding-top: 15px;
          }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">\u{1F956}</div>
          <div class="title">BOULANGERIE ROSE</div>
          <div class="subtitle">Export des commandes</div>
        </div>
        
        <div class="filters-info">
          <strong>Filtres appliqu\xE9s :</strong><br>
          ${this.filtreNumero()?`N\xB0 commande: ${this.filtreNumero()}<br>`:""}
          ${this.filtreStatut()!=="tous"?`Statut: ${this.getStatutInfo(this.filtreStatut()).label}<br>`:""}
          ${this.filtreType()!=="tous"?`Type: ${this.filtreType()==="livreur"?"Livreur":"Fournisseur"}<br>`:""}
          ${this.filtreAnnee()!=="toutes"?`Ann\xE9e: ${this.filtreAnnee()}<br>`:""}
          ${this.filtreMois()!=="tous"?`Mois: ${this.moisDisponibles.find(x=>x.value===this.filtreMois())?.label}<br>`:""}
          <strong>Nombre de commandes: ${t.length}</strong>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>N\xB0 Commande</th>
              <th>Date</th>
              <th>Type</th>
              <th>Destinataire</th>
              <th>Statut</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(x=>`
              <tr>
                <td>${x.id}</td>
                <td>${this.formatDate(x.date)}</td>
                <td>${x.type==="livreur"?"\u{1F3CD}\uFE0F Livreur":"\u{1F3ED} Fournisseur"}</td>
                <td>${x.destinataire}</td>
                <td>${this.getStatutInfo(x.statut).icon} ${this.getStatutInfo(x.statut).label}</td>
                <td style="text-align: right">${this.formatCFA(x.total)}</td>
              </tr>
            `).join("")}
            <tr class="total-row">
              <td colspan="5" style="text-align: right"><strong>TOTAL G\xC9N\xC9RAL</strong></td>
              <td style="text-align: right"><strong class="grand-total">${this.formatCFA(this.totalAffiche())}</strong></td>
            </tr>
          </tbody>
        </table>
        
        <div class="footer">
          <p>Document g\xE9n\xE9r\xE9 le ${o} \xE0 ${l}</p>
          <p>Boulangerie Rose - Tous droits r\xE9serv\xE9s</p>
        </div>
      </body>
      </html>
    `;let d=window.open("","_blank");d?(d.document.write(e.innerHTML),d.document.close(),d.onload=()=>{d.print()}):alert("Veuillez autoriser les popups pour exporter")}retourListeCommandes(){this.router.navigate(["/gerant/commandes"])}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=z({type:r,selectors:[["app-historique-commandes-component"]],decls:75,vars:11,consts:[[1,"historique-container"],[1,"page-header"],[1,"page-title"],[1,"btn-back",3,"click"],[1,"filtres-bar"],[1,"filtre-item"],["type","text","placeholder","Ex: CMD001",1,"filtre-input",3,"ngModelChange","ngModel"],[1,"filtre-select",3,"ngModelChange","ngModel"],[3,"value"],["value","toutes"],[1,"filtre-select",3,"ngModelChange","ngModel","disabled"],[1,"export-buttons"],["title","Exporter en Excel",1,"btn-excel",3,"click"],["title","Exporter en PDF",1,"btn-pdf",3,"click"],[1,"reset-btn",3,"click"],[1,"total-bar"],[1,"total-label"],[1,"total-value"],[1,"total-count"],[1,"table-container"],[1,"commandes-table"],[1,"montant-col"],[1,"clickable-row"],[1,"pagination-container"],[1,"modal-overlay"],[1,"clickable-row",3,"click"],[1,"commande-id-cell"],[1,"commande-id-badge"],[1,"date-cell"],[1,"type-cell"],[1,"type-badge"],[1,"destinataire-cell"],[1,"produits-preview"],[1,"produit-preview-tag"],[1,"produit-preview-more"],[1,"status-cell"],[1,"status-badge"],[1,"observation-cell"],[1,"observation-text",3,"title"],[1,"observation-empty"],[1,"montant-cell"],[1,"montant-value"],["colspan","7",1,"empty-row"],[1,"empty-state"],[1,"empty-icon"],[1,"reset-btn-small",3,"click"],[1,"pagination-info"],[1,"items-per-page"],[3,"ngModelChange","ngModel"],[1,"pagination-controls"],[1,"pagination-btn",3,"click","disabled"],[1,"pagination-dots"],[1,"pagination-btn",3,"active"],[1,"pagination-btn",3,"click"],[1,"modal-overlay",3,"click"],[1,"modal-content",3,"click"],[1,"modal-header"],[1,"modal-header-actions"],["title","Imprimer / Exporter en PDF",1,"btn-print",3,"click"],[1,"close-btn",3,"click"],[1,"modal-body"],[1,"details-section"],[1,"detail-grid"],[1,"detail-item"],[1,"detail-label"],[1,"detail-value","commande-id-highlight"],[1,"detail-value"],[1,"type-badge-modal"],[1,"detail-value","destinataire-highlight"],[1,"status-badge-modal"],[1,"detail-item","full-width"],[1,"detail-value","note-text"],[1,"produits-section"],[1,"section-title"],[1,"produits-detail-table"],[1,"total-row"],["colspan","3"],[1,"total-grand"],[1,"modal-footer"],[1,"btn-print-footer",3,"click"],[1,"btn-secondary",3,"click"],[1,"produit-nom-cell"],[1,"produit-quantite-cell"],[1,"produit-prix-cell"],[1,"produit-total-cell"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"\u{1F4DC} Historique des commandes"),i(),n(4,"button",3),p("click",function(){return o.retourListeCommandes()}),a(5," \u2190 Retour aux commandes "),i()(),n(6,"div",4)(7,"div",5)(8,"label"),a(9,"N\xB0 commande"),i(),n(10,"input",6),p("ngModelChange",function(d){return o.filtreNumero.set(d)}),i()(),n(11,"div",5)(12,"label"),a(13,"Statut"),i(),n(14,"select",7),p("ngModelChange",function(d){return o.filtreStatut.set(d)}),_(15,ie,2,2,"option",8,T),i()(),n(17,"div",5)(18,"label"),a(19,"Type"),i(),n(20,"select",7),p("ngModelChange",function(d){return o.filtreType.set(d)}),_(21,oe,2,2,"option",8,T),i()(),n(23,"div",5)(24,"label"),a(25,"Ann\xE9e"),i(),n(26,"select",7),p("ngModelChange",function(d){return o.filtreAnnee.set(d)}),n(27,"option",9),a(28,"Toutes"),i(),_(29,ae,2,2,"option",8,F),i()(),n(31,"div",5)(32,"label"),a(33,"Mois"),i(),n(34,"select",10),p("ngModelChange",function(d){return o.filtreMois.set(d)}),_(35,re,2,2,"option",8,T),i()(),n(37,"div",11)(38,"button",12),p("click",function(){return o.exporterExcel()}),a(39," \u{1F4CA} Excel "),i(),n(40,"button",13),p("click",function(){return o.exporterPDF()}),a(41," \u{1F4C4} PDF "),i(),n(42,"button",14),p("click",function(){return o.resetFiltres()}),a(43,"R\xE9initialiser"),i()()(),n(44,"div",15)(45,"span",16),a(46,"Total des commandes affich\xE9es :"),i(),n(47,"span",17),a(48),i(),n(49,"span",18),a(50),i()(),n(51,"div",19)(52,"table",20)(53,"thead")(54,"tr")(55,"th"),a(56,"N\xB0 commande"),i(),n(57,"th"),a(58,"Date"),i(),n(59,"th"),a(60,"Type commande"),i(),n(61,"th"),a(62,"Destinataire"),i(),n(63,"th"),a(64,"Statut"),i(),n(65,"th"),a(66,"Observations"),i(),n(67,"th",21),a(68,"Montant"),i()()(),n(69,"tbody"),_(70,ce,25,14,"tr",22,ne,!1,me,9,0,"tr"),i()()(),h(73,be,17,6,"div",23),i(),h(74,he,76,13,"div",24)),e&2&&(s(10),u("ngModel",o.filtreNumero()),s(4),u("ngModel",o.filtreStatut()),s(),v(o.statutsDisponibles),s(5),u("ngModel",o.filtreType()),s(),v(o.typesDisponibles),s(5),u("ngModel",o.filtreAnnee()),s(3),v(o.anneesDisponibles()),s(5),u("ngModel",o.filtreMois())("disabled",o.filtreAnnee()==="toutes"),s(),v(o.moisDisponibles),s(13),m(o.formatCFA(o.totalAffiche())),s(2),P("(",o.commandesPaginees().length," commandes)"),s(20),v(o.commandesPaginees()),s(3),M(o.commandesFiltrees().length>0?73:-1),s(),M(o.showDetailsModal()&&o.selectedCommande()?74:-1))},dependencies:[R,X,W,K,U,Q,G,J,j],styles:['[_nghost-%COMP%]{--pain-deep: #C1654A;--pain-rose: #E8856A;--pain-blush: #F0A898;--pain-cream: #F5E6DC;--pain-light: #FDF4F1;--gris-fonce: #3D3028;--gris-moyen: #8C7B72;--gris-doux: #F5F0EE;--vert-herbe: #6B8F5E;--or: #D4943A;--bleu-nuit: #3A5068;--font-display: "Playfair Display", serif;--font-body: "DM Sans", sans-serif;--radius-sm: 8px;--radius-md: 12px;--radius-lg: 16px;--shadow-soft: 0 4px 12px rgba(193, 101, 74, .08);display:block;height:100%}.historique-container[_ngcontent-%COMP%]{padding:24px;height:100%;overflow-y:auto;display:flex;flex-direction:column;gap:20px;background:var(--gris-doux)}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}.page-title[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--gris-fonce);margin:0}.btn-back[_ngcontent-%COMP%]{background:#fff;color:var(--pain-deep);border:1.5px solid var(--pain-blush);padding:10px 20px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:14px;font-weight:500;cursor:pointer;transition:all .2s;white-space:nowrap}.btn-back[_ngcontent-%COMP%]:hover{background:var(--pain-light);transform:translateY(-1px)}.filtres-bar[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;background:#fff;padding:16px 20px;border-radius:var(--radius-md);box-shadow:var(--shadow-soft)}.filtre-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.filtre-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--gris-moyen)}.filtre-input[_ngcontent-%COMP%], .filtre-select[_ngcontent-%COMP%]{padding:8px 12px;border:1.5px solid var(--pain-cream);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:13px;min-width:140px;background:#fff}.filtre-input[_ngcontent-%COMP%]:focus, .filtre-select[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--pain-rose)}.filtre-select[_ngcontent-%COMP%]:disabled{background:var(--gris-doux);cursor:not-allowed;opacity:.7}.reset-btn[_ngcontent-%COMP%]{background:none;border:1px solid var(--pain-cream);color:var(--gris-moyen);padding:8px 20px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;font-weight:500;transition:all .2s;height:38px;align-self:flex-end}.reset-btn[_ngcontent-%COMP%]:hover{background:var(--pain-light);border-color:var(--pain-rose);color:var(--pain-deep)}.table-container[_ngcontent-%COMP%]{background:#fff;border-radius:var(--radius-md);overflow-x:auto;box-shadow:var(--shadow-soft)}.commandes-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-family:var(--font-body)}.commandes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:16px 12px;text-align:left;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--gris-moyen);background:var(--gris-doux);border-bottom:2px solid var(--pain-cream)}.commandes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:16px 12px;font-size:13px;color:var(--gris-fonce);border-bottom:1px solid var(--pain-cream);vertical-align:middle}.commandes-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:var(--pain-light)}.montant-col[_ngcontent-%COMP%]{text-align:right}.commande-id-cell[_ngcontent-%COMP%]{font-weight:600}.commande-id-badge[_ngcontent-%COMP%]{font-family:monospace;font-size:13px;font-weight:700;color:var(--pain-deep);background:var(--pain-light);padding:4px 10px;border-radius:20px;display:inline-block}.date-cell[_ngcontent-%COMP%]{font-size:12px;color:var(--gris-moyen);white-space:nowrap}.type-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600}.type-badge.livreur[_ngcontent-%COMP%]{background:#e8856a1f;color:var(--pain-rose)}.type-badge.fournisseur[_ngcontent-%COMP%]{background:#3a50681f;color:var(--bleu-nuit)}.destinataire-cell[_ngcontent-%COMP%]{font-weight:500}.produits-preview[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}.produit-preview-tag[_ngcontent-%COMP%]{font-size:11px;color:var(--gris-moyen);background:var(--gris-doux);padding:2px 8px;border-radius:12px;display:inline-block}.produit-preview-more[_ngcontent-%COMP%]{font-size:11px;color:var(--pain-deep);font-weight:500}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600}.status-badge.success[_ngcontent-%COMP%]{background:#6b8f5e1f;color:var(--vert-herbe)}.status-badge.warning[_ngcontent-%COMP%]{background:#d4943a1f;color:var(--or)}.status-badge.danger[_ngcontent-%COMP%]{background:#c1654a1f;color:var(--pain-deep)}.status-badge.info[_ngcontent-%COMP%]{background:#3a50681f;color:var(--bleu-nuit)}.observation-cell[_ngcontent-%COMP%]{max-width:200px}.observation-text[_ngcontent-%COMP%]{font-size:12px;color:var(--gris-moyen);display:flex;align-items:center;gap:4px;cursor:help}.observation-empty[_ngcontent-%COMP%]{color:var(--pain-cream);font-size:14px}.montant-cell[_ngcontent-%COMP%]{text-align:right}.montant-value[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--pain-deep)}.pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;background:#fff;padding:16px 20px;border-radius:var(--radius-md);box-shadow:var(--shadow-soft)}.pagination-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;font-size:13px;color:var(--gris-moyen)}.items-per-page[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.items-per-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:4px 8px;border:1px solid var(--pain-cream);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:13px;cursor:pointer}.pagination-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.pagination-btn[_ngcontent-%COMP%]{padding:6px 12px;border:1px solid var(--pain-cream);background:#fff;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:13px;cursor:pointer;transition:all .2s;min-width:36px}.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--pain-light);border-color:var(--pain-rose);color:var(--pain-deep)}.pagination-btn.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--pain-rose),var(--pain-deep));color:#fff;border-color:transparent}.pagination-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.pagination-dots[_ngcontent-%COMP%]{padding:0 4px;color:var(--gris-moyen)}.empty-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:60px 24px}.empty-icon[_ngcontent-%COMP%]{font-size:64px;display:block;margin-bottom:16px;opacity:.5}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gris-moyen);margin-bottom:16px}.reset-btn-small[_ngcontent-%COMP%]{background:none;border:1px solid var(--pain-cream);color:var(--pain-deep);padding:8px 20px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;transition:all .2s}.reset-btn-small[_ngcontent-%COMP%]:hover{background:var(--pain-light);border-color:var(--pain-rose)}@media (max-width: 1024px){.filtres-bar[_ngcontent-%COMP%]{flex-wrap:wrap}.filtre-item[_ngcontent-%COMP%]{flex:1;min-width:150px}.filtre-input[_ngcontent-%COMP%], .filtre-select[_ngcontent-%COMP%]{width:100%;min-width:auto}.reset-btn[_ngcontent-%COMP%]{align-self:flex-start;margin-top:20px}}@media (max-width: 768px){.historique-container[_ngcontent-%COMP%]{padding:16px}.page-title[_ngcontent-%COMP%]{font-size:20px}.commandes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .commandes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 8px}.produits-preview[_ngcontent-%COMP%]{display:none}.observation-cell[_ngcontent-%COMP%]{max-width:120px}.pagination-container[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.pagination-info[_ngcontent-%COMP%]{justify-content:space-between}.pagination-controls[_ngcontent-%COMP%]{justify-content:center}}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:all .2s ease}.clickable-row[_ngcontent-%COMP%]:hover{background:var(--pain-light);transform:translate(2px);box-shadow:0 2px 8px #c1654a1a}.clickable-row[_ngcontent-%COMP%]:active{transform:translate(1px)}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#2c1f1a99;display:flex;align-items:center;justify-content:center;z-index:1000;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);padding:16px;animation:_ngcontent-%COMP%_fadeIn .2s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.modal-content[_ngcontent-%COMP%]{background:#fff;border-radius:24px;width:100%;max-width:800px;max-height:90vh;overflow-y:auto;animation:_ngcontent-%COMP%_slideUp .3s ease;box-shadow:0 20px 40px #0003}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:20px;margin:0;color:var(--gris-fonce)}.close-btn[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;border:none;background:#fff;cursor:pointer;font-size:16px;transition:all .2s;display:flex;align-items:center;justify-content:center}.close-btn[_ngcontent-%COMP%]:hover{background:var(--pain-cream);transform:rotate(90deg)}.modal-body[_ngcontent-%COMP%]{padding:24px}.details-section[_ngcontent-%COMP%]{margin-bottom:24px;padding-bottom:20px;border-bottom:1px solid var(--pain-cream)}.detail-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.detail-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.detail-item.full-width[_ngcontent-%COMP%]{grid-column:span 2}.detail-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--gris-moyen)}.detail-value[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:var(--gris-fonce)}.commande-id-highlight[_ngcontent-%COMP%]{font-family:monospace;font-size:16px;font-weight:700;color:var(--pain-deep);background:var(--pain-light);padding:4px 12px;border-radius:20px;display:inline-block}.destinataire-highlight[_ngcontent-%COMP%]{font-weight:700;font-size:15px;color:var(--gris-fonce)}.type-badge-modal[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600}.type-badge-modal.livreur[_ngcontent-%COMP%]{background:#e8856a1f;color:var(--pain-rose)}.type-badge-modal.fournisseur[_ngcontent-%COMP%]{background:#3a50681f;color:var(--bleu-nuit)}.status-badge-modal[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600}.status-badge-modal.success[_ngcontent-%COMP%]{background:#6b8f5e1f;color:var(--vert-herbe)}.status-badge-modal.warning[_ngcontent-%COMP%]{background:#d4943a1f;color:var(--or)}.status-badge-modal.danger[_ngcontent-%COMP%]{background:#c1654a1f;color:var(--pain-deep)}.status-badge-modal.info[_ngcontent-%COMP%]{background:#3a50681f;color:var(--bleu-nuit)}.note-text[_ngcontent-%COMP%]{background:var(--gris-doux);padding:10px 14px;border-radius:10px;line-height:1.5;font-size:13px}.produits-section[_ngcontent-%COMP%]{margin-top:20px}.section-title[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:16px;font-weight:700;margin-bottom:16px;color:var(--gris-fonce);padding-bottom:8px;border-bottom:2px solid var(--pain-cream)}.produits-detail-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.produits-detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .produits-detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px 10px;text-align:left;border-bottom:1px solid var(--pain-cream)}.produits-detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--gris-moyen);text-transform:uppercase;letter-spacing:.5px;background:var(--gris-doux)}.produits-detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;color:var(--gris-fonce)}.produit-nom-cell[_ngcontent-%COMP%]{font-weight:600}.produit-quantite-cell[_ngcontent-%COMP%]{text-align:center}.produit-prix-cell[_ngcontent-%COMP%], .produit-total-cell[_ngcontent-%COMP%]{text-align:right}.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700;padding-top:16px;border-top:2px solid var(--pain-cream);border-bottom:none;background:var(--pain-light)}.total-grand[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:18px;color:var(--pain-deep)}@media (max-width: 768px){.modal-content[_ngcontent-%COMP%]{width:95%;max-height:85vh}.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.modal-body[_ngcontent-%COMP%]{padding:16px}.detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:12px}.detail-item.full-width[_ngcontent-%COMP%]{grid-column:span 1}.produits-detail-table[_ngcontent-%COMP%]{font-size:12px}.produits-detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .produits-detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 6px}.produit-nom-cell[_ngcontent-%COMP%]{max-width:120px;word-break:break-word}}@media (max-width: 480px){.produits-detail-table[_ngcontent-%COMP%]{display:block;overflow-x:auto}}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--pain-cream);background:var(--pain-light);border-radius:24px 24px 0 0}.modal-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.btn-print[_ngcontent-%COMP%]{background:#fff;color:var(--pain-deep);border:1.5px solid var(--pain-blush);padding:8px 16px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:6px}.btn-print[_ngcontent-%COMP%]:hover{background:var(--pain-light);transform:translateY(-1px);border-color:var(--pain-rose)}.btn-print-footer[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--pain-rose),var(--pain-deep));color:#fff;border:none;padding:10px 20px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:8px}.btn-print-footer[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #c1654a4d}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:12px;padding:16px 24px 24px;border-top:1px solid var(--pain-cream);background:#fff;border-radius:0 0 24px 24px}.btn-secondary[_ngcontent-%COMP%]{background:#fff;color:var(--pain-deep);border:1.5px solid var(--pain-blush);padding:10px 24px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:14px;font-weight:500;cursor:pointer;transition:all .2s}.btn-secondary[_ngcontent-%COMP%]:hover{background:var(--pain-light);transform:translateY(-1px)}@media (max-width: 768px){.modal-header[_ngcontent-%COMP%]{padding:16px 20px;flex-direction:column;gap:12px;align-items:stretch}.modal-header-actions[_ngcontent-%COMP%]{justify-content:space-between}.btn-print[_ngcontent-%COMP%]{flex:1;justify-content:center}.close-btn[_ngcontent-%COMP%]{flex-shrink:0}.modal-footer[_ngcontent-%COMP%]{flex-direction:column-reverse}.btn-print-footer[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]{width:100%;justify-content:center}}.total-bar[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--pain-light),white);border:1px solid var(--pain-cream);border-radius:var(--radius-md);padding:12px 20px;display:flex;align-items:center;justify-content:flex-end;gap:12px;flex-wrap:wrap}.total-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:var(--gris-fonce)}.total-value[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--pain-deep)}.total-count[_ngcontent-%COMP%]{font-size:12px;color:var(--gris-moyen);background:var(--gris-doux);padding:4px 10px;border-radius:20px}.export-buttons[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:8px}.btn-excel[_ngcontent-%COMP%], .btn-pdf[_ngcontent-%COMP%]{padding:8px 16px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;border:none;height:38px;display:flex;align-items:center;gap:6px}.btn-excel[_ngcontent-%COMP%]{background:#1f7b4d;color:#fff}.btn-excel[_ngcontent-%COMP%]:hover{background:#166c42;transform:translateY(-1px)}.btn-pdf[_ngcontent-%COMP%]{background:#d32f2f;color:#fff}.btn-pdf[_ngcontent-%COMP%]:hover{background:#b71c1c;transform:translateY(-1px)}.commandes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .commandes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 12px}.commandes-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:12px;font-size:11px}.commandes-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}.pagination-container[_ngcontent-%COMP%]{padding:12px 16px;gap:12px}.pagination-info[_ngcontent-%COMP%]{font-size:12px}.items-per-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:3px 6px;font-size:12px}.pagination-btn[_ngcontent-%COMP%]{padding:4px 10px;font-size:12px;min-width:32px}@media (max-width: 1024px){.export-buttons[_ngcontent-%COMP%]{margin-top:8px;width:100%;justify-content:flex-end}.total-bar[_ngcontent-%COMP%]{justify-content:space-between}}@media (max-width: 768px){.filtres-bar[_ngcontent-%COMP%]{flex-direction:column}.export-buttons[_ngcontent-%COMP%]{width:100%;justify-content:stretch}.btn-excel[_ngcontent-%COMP%], .btn-pdf[_ngcontent-%COMP%], .reset-btn[_ngcontent-%COMP%]{flex:1;justify-content:center}.total-bar[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.pagination-container[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.pagination-info[_ngcontent-%COMP%]{justify-content:space-between}.pagination-controls[_ngcontent-%COMP%]{justify-content:center}}']})};export{Z as HistoriqueCommandesComponent};
