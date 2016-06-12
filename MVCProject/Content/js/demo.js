$(window).load(function(){
    //Welcome Message (not for login page)
    function notify(message, type){
        $.growl({
            message: message
        },{
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'top',
                align: 'right'
            },
            delay: 2500,
            animate: {
                    enter: 'animated fadeIn',
                    exit: 'animated fadeOut'
            },
            offset: {
                x: 20,
                y: 85
            }
        });
    };
    
    if (!$('.login-content')[0]) {
        
        //PARA OBENER EL NOMBRE DE LA PERSONA Y SALUDARLA
        var sexo=$('#sexoLabel').val();
        var nombre=$('#nameL').text();
        
        var letra="";
        
        if(sexo=='2')
            letra="o";
        else
           letra="a";
        
        notify('Bievenid'+letra+' '+nombre+' :)', 'inverse');
    } 
});