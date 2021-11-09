$(document).ready(function () {
    $('#model').prop('disabled', true).addClass('disable');
    $('#parts').prop('disabled', true).addClass('disable');

    $('.hr li').click(function(e){
        $('.hr li').each(function(){
            $(this).removeClass('link-active');
        });
        if($(this).hasClass('link-active') == false){
            $(this).addClass('link-active');
            $('.slider-img').removeClass('photo-1 photo-2 photo-3').addClass('photo-'+$(this).attr('id'));
        }
               
    });

    $('.slider-arrow-right').click(function(){
        
        switch($('.link-active').attr('id')){
            case '1':
                $('#1').removeClass('link-active');
                $('.slider-img').removeClass('photo-1 photo-2 photo-3').addClass('photo-2');
                $('#2').addClass('link-active');
                break;  
            case '2':
                $('#2').removeClass('link-active');
                $('.slider-img').removeClass('photo-1 photo-2 photo-3').addClass('photo-3');
                $('#3').addClass('link-active');    
                break;

        }
    });

    $('.slider-arrow-left').click(function(){
        
        switch($('.link-active').attr('id')){
            case '3':
                $('.slider-arrow-left').show();
                $('#3').removeClass('link-active');
                $('.slider-img').removeClass('photo-1 photo-2 photo-3').addClass('photo-2');
                $('#2').addClass('link-active');
                break;  
            case '2':
                $('#2').removeClass('link-active');
                $('.slider-img').removeClass('photo-1 photo-2 photo-3').addClass('photo-1');
                $('#1').addClass('link-active');    
             //  $('.slider-arrow-left').hide();
        }
    });

    $('#mark').change(function (e) {
        var model = {        
            audi : [{'name':'A5','val':'3'}, {'name':'A6','val':'3'}, {'name':'A7','val':'3'},{'name':'A8','val':'3'}, {'name':'Q5','val':'3'}, {'name':'Q7','val':'3'}],
            bmw : [{'name':'1 series','val':'3'}, {'name':'2 series','val':'3'}, {'name':'3 series','val':'3'}, {'name':'4 series','val':'3'}, {'name':'5 series','val':'3'},
                   {'name':'6 series','val':'3'},{ 'name':'7 series','val':'3'}, {'name':'8 series','val':'3'}, {'name':'X1','val':'3'}, {'name':'X2','val':'3'}, {'name':'X3','val':'3'}, {'name':'X5','val':'3'}, {'name':'X6','val':'3'}],
            chevrolet : [{'name':'Aveo','val':'1'}, {'name':'Cruze','val':'1'}, {'name':'Lacetti','val':'1'}, {'name':'Lanos','val':'1'}, {'name':'Niva','val':'3'}],
            ford : [{'name':'Explorer','val':'3'}, {'name':'Focus','val':'1'}, {'name':'Mondeo','val':'1'}],
            honda : [{'name':'Accord','val':'2'}, {'name':'Civic','val':'1'}, {'name':'CR-V','val':'2'}],
            hyundai : [{'name':'Elantra','val':'1'}, {'name':'Getz','val':'1'}, {'name':'i30','val':'1'}, {'name':'i30 N','val':'1'}, {'name':'i40','val':'1'}, {'name':'ix35','val':'2'}, {'name':'Santa Fe','val':'2'}, 
                    {'name':'Solaris','val':'1'}, {'name':'Sonata','val':'1'}, {'name':'Tucson','val':'1'}, {'name':'Acent','val':'1'}],
            kia : [{'name':'Ceed','val':'1'}, {'name':'Cerato','val':'1'}, {'name':'Rio','val':'1'}, {'name':'Sorento','val':'1'}, {'name':'Spectra','val':'1'}, {'name':'Sportage','val':'2'}],
            mazda : [{'name':'3','val':'1'}, {'name':'6','val':'2'}, {'name':'CX-5','val':'2'}, {'name':'CX-7','val':'2'}, {'name':'CX-9','val':'2'}],
            mercedez : [{'name':'C-class','val':'3'}, {'name':'CLS-class','val':'3'}, {'name':'E-class','val':'3'}, {'name':'GL-class','val':'3'}, {'name':'GLA-class','val':'3'}, {'name':'GLC-class','val':'3'}, 
                    {'name':'GLE-class'}, {'name':'GLK-class','val':'3'}, {'name':'S-class','val':'3'}],
            mitsubishi : [{'name':'Galant','val':'1'}, {'name':'L200','val':'2'}, {'name':'Lancer','val':'1'}, {'name':'Outlander','val':'2'}, {'name':'Pajero','val':'2'}],
            nissan : [{'name':'Almera','val':'2'}, {'name':'Almera Classic','val':'1'}, {'name':'Juke','val':'2'}, {'name':'Murano','val':'2'}, {'name':'Navara','val':'2'}, {'name':'Note','val':'1'}, {'name':'Pathfinder','val':'2'},
                    {'name':'Patrol','val':'2'}, {'name':'Primera','val':'1'},{'name':'Qashqai','val':'2'}, {'name':'Teana','val':'1'}, {'name':'Terrano','val':'2'}, {'name':'Tiida','val':'1'}, {'name':'X-Trail','val':'2'}],
            opel : [{'name':'Astra','val':'1'}, {'name':'Corsa','val':'1'}, {'name':'Mokka','val':'1'}],
            skoda : [{'name':'Fabia','val':'1'}, {'name':'Kodiaq','val':'3'}, {'name':'Octavia','val':'2'}, {'name':'Rapid','val':'1'}, {'name':'Superb','val':'3'}, {'name':'Yeti','val':'1'}],
            subaru : [{'name':'Forester','val':'1'}, {'name':'Impreza','val':'1'}, {'name':'Outback','val':'2'}],
            toyota : [{'name':'Avensis','val':'2'}, {'name':'Camry','val':'2'}, {'name':'Corolla','val':'1'}, {'name':'Highlander','val':'3'}, {'name':'Land Cruiser','val':'3'},
                     {'name':'Land Cruiser Prado','val':'3'}, {'name':'RAV4','val':'2'}, {'name':'Yaris','val':'1'}, {'name':'Yaris Verso','val':'1'}],
            vaz : [{'name':'2101-2107','val':'0'}, {'name':'2108, 2109, 21099','val':'0'}, {'name':'2110, 2111, 2112','val':'0'}, {'name':'2113, 2114, 2115','val':'0'}, 
                     {'name':'Granta','val':'0'}, {'name':'Vesta SW','val':'0'}],
            volkswagen : [{'name':'Golf','val':'2'}, {'name':'Jetta','val':'2'}, {'name':'Passat','val':'2'}, {'name':'Polo','val':'2'}, {'name':'Tiguan','val':'3'}, {'name':'Touareg','val':'3'}],
            volvo : [{'name':'S60','val':'2'}, {'name':'S70','val':'2'}, {'name':'S80','val':'3'}, {'name':'XC60','val':'3'}, {'name':'XC70','val':'3'}, {'name':'XC90','val':'3'}],
            renault: [{'name':'Logan','val':'0'}, {'name':'Sandero','val':'2'}, {'name':'Duster','val':'1'}, {'name':'Kaptur','val':'2'}]       
        };

        var curVal = $(this).val();
        $('#model').prop('disabled', false).removeClass('disable');
        $('#parts').prop('disabled', false).removeClass('disable');

        if (curVal == '0'){
            $('#model').prop('disabled', true).addClass('disable');
            $('#parts').val('0');
            $('#parts').prop('disabled', true).addClass('disable');
            $('#model option').remove();
            $('#model').append('<option value="0">Выберите модель</option>');
            $('#price').text('0');
        }
        else{
            $('#model option').remove();
            $.each(model[curVal], function(i, item) {
                $('#model').append('<option value="'+item.val+'">'+item.name+'</option>');
            });
        }

    });

    $('#parts').change(function(e){
        var curVal = $(this).val();
        var modelVal = $('#model').val();
        if( modelVal == '0' && curVal != '0' ){
           if(curVal == 'cowling' || curVal == 'front-door'){
               $('#price').text('6 000');
           }
           else if(curVal == 'front-wing' || curVal =='back-wing'){
               $('#price').text('5 000');
           }
           else if (curVal == 'back-bumper' || curVal == 'front-bumper'){
               $('#price').text('4 000');
           }
           else if(curVal == 'roof'){
               $('#price').text('7 000');
           }
           else if(curVal == 'back-door'){
               $('#price').text('5 500');
           }
           else if(curVal == 'trunk-lid'){
               $('#price').text('7 000');
           }
           else{
               $('#price').text('700');
           }
        }
        else if ( modelVal == '1' && curVal != '0' ){
            if(curVal == 'cowling' || curVal == 'front-wing' || curVal =='back-wing'){
                $('#price').text('7 000');
            }
            else if(curVal == 'front-door' ||  curVal == 'back-door' || curVal == 'back-bumper'){
                $('#price').text('6 000');
            }
            else if(curVal == 'roof'){
                $('#price').text('10 000');
            }
            else if (curVal == 'front-bumper'){
                $('#price').text('5 500');
            }
            else if(curVal == 'trunk-lid'){
                $('#price').text('9 000');
            }
            else{
                $('#price').text('700');
            }
        }
        else if ( modelVal == '2' && curVal != '0' ){
            if(curVal == 'cowling' || curVal == 'front-door' || curVal =='back-wing'|| curVal =='front-wing' || curVal == 'back-bumper'){
                $('#price').text('8 000');
            }
            else if( curVal == 'back-door' ){
                $('#price').text('6 000');
            }
            else if(curVal == 'roof'){
                $('#price').text('10 000');
            }
            else if (curVal == 'front-bumper'){
                $('#price').text('6 500');
            }
            else if(curVal == 'trunk-lid'){
                $('#price').text('9 000');
            }
            else{
                $('#price').text('700');
            }
        } 
        else if( modelVal == '3' && curVal != '0' ){
            if( curVal =='back-wing'|| curVal =='front-wing' || curVal == 'back-bumper'){
                $('#price').text('9 000');
            }
            else if( curVal == 'cowling' || curVal == 'trunk-lid' ){
                $('#price').text('10 000');
            }
            else if(curVal == 'back-door' || curVal == 'front-bumper'){
                $('#price').text('7 500');
            }
            else if (curVal == 'front-door'){
                $('#price').text('8 000');
            }
            else if(curVal == 'roof'){
                $('#price').text('13 000');
            }
            else{
                $('#price').text('700');
            }
        }   
        else{
            $('#price').text('0');
        }
    });
});