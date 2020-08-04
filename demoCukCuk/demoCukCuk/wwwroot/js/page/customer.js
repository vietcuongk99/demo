$(document).ready(function(){
    var customerJS = new CustomerJS();
   
})

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
            debugger;
            var customerDataHTML = `<tr>
                                    <td>`+item.CustomerCode+`</td>
                                    <td>`+item.CustomerName+`</td>
                                    <td>`+item.CustomerBirthday+`</td>
                                    <td>`+item.CustomerMobilePhone+`</td>
                                    <td>`+setCheckBox(item.is5FOODMember)+`</td>
                                </tr>`

        $('table#customerData').append(customerDataHTML);             
        debugger           
        })
    }

    /*Hàm set checkbox
    Create by: DVCUONG1 (4/8/2020) 
    */
    setCheckBox(value) {
        if(value == "true") {
            var checkbox = `<input type="checkbox" checked />`;
        } else {
            var checkbox = `<input type="checkbox" />`;
        }
        return checkbox;
        debugger
        
    }
}

var fakeData = [
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: "false",
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: "true",
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: "true",
    },
    {
        CustomerCode: "KH01",
        CustomerName: "Đinh Việt Cường",
        CustomerBirthday: "3/12/1999",
        CustomerPhoneNumber: "0968472466",
        CustomerDebitAmount: "100000",
        is5FOODMember: "true",
    }
]