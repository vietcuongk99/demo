$(document).ready(function(){
    var customerJS = new CustomerJS();
    
   
});

function closeDialog() {
    
}

class CustomerJS {
    constructor() {
        this.loadData();
    
    }


    /* Hàm lấy dữ liệu
    Create by: DVCUONG1 (4/8/2020) 
    */
    loadData() {
        var data = fakeData;
        $.each(data, function(index, item){
           
            var customerDataHTML = `<tr>
                                    <td>`+item.CustomerCode+`</td>
                                    <td>`+item.CustomerName+`</td>
                                    <td>`+item.CustomerBirthday+`</td>
                                    <td>`+item.CustomerMobilePhone+`</td>
                                    
                                </tr>`

        $('table#customerData').append(customerDataHTML);             
        
        })
    }

    /*Hàm set checkbox
    Create by: DVCUONG1 (4/8/2020) 
    */
    setCheckBox(value) {
        var checkis5FOOD = $(`<input type="checkbox" />`);
        if(value) {
            checkis5FOOD = checkis5FOOD.attr("checked", true);
        } else {
            checkis5FOOD = checkis5FOOD.attr("checked", false);
        }
        return checkis5FOOD;
     
        
    }
}

var fakeData = [
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: false,
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: true,
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: false,
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: true,
    }
]