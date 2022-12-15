export default {
    render(data){
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html(data){
        return `
            <div class="la-card">
            <div class="la-card__logo"><i class="fa-brands ${data.logo}"></i></i></div>
            <div class="la-card__user">
                   ${data.user}
            </div>
            <div class="la-card__info">
               
                <div class="la-card__prof">
                ${data.prof}
                </div>
                <div class="la-card__mail">
                ${data.mail}
                </div>
                <div class="la-card__number">
                ${data.tel}
                </div>  
            </div>  
             

            
        </div>
        `;
    },
    css(){
        return `
            <style>
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
                .la-card{
                    width: 85.6mm;
                    height: 53.98mm;
                    border-radius: 3.18mm;
                    box-sizing: border-box;
                    padding: 8mm;
                    display: grid;
                    background: rgb(238,174,202);
                    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
                    grid-template-columns: repeat(3,1fr);
                    gap: 3mm 10mm;
                    align-content: space-between;
                    font-size: 16pt;
                    font-family: sans-serif;
                }
              
                .la-card__logo{
                    grid-row-end: span 3;
                font-size: 55pt;
                }
                .la-card__number{
                    white-space:nowrap;
                    font-size:15px;
                    justify-content: space-between;
                }
            
                .la-card__user{
                    align-self: flex-end;
                font-size: 2em;
                grid-column-end: span 2;
                }
                
        </style>
        `
    }
}