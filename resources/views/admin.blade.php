@extends('layouts.app')

@section('content')
@if (Auth::user()->roll == 1) 
<div class="panel-body text-center">            
    <div id="grid">
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th ></th>
            <th style = "width:10%">Name</th>
            <th style = "width:10%">Email</th>
            <th style = "width:10%">API Key</th>
            <th style = "width:10%">Secret Key</th>
            <th style = "width:10%">Payment</th>
            <th style = "width:10%">Trade</th>
            <th style = "width:10%">Status</th>
            <th style = "width:10%">Place Order</th>
            <th style = "width:10%">Cancel Order</th>
        </tr>
        </thead>
        <tbody id = "table_data">           
        </tbody>
    </table>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function () {
    $.ajax({
        url :"admin_view",
        type:'GET',
        success: function(data){
        var html = '';
        var i;
        for(i=0; i<data.length; i++){
            html += '<tr id="'+data[i].id+'">'+
                        '<td>'+ (i+1) +'</td>'+
                        '<td>'+data[i].name+'</td>'+
                        '<td>' +data[i].email+'</td>'+
                        '<td>'+data[i].api_key+'</td>'+
                        '<td>'+data[i].secret_key+'</td>';
            if(data[i].payment == 0){
                html +='<td style="text-align:center; " class = "" >'+
                '<a href="javascript:void(0);" class="btn btn-yellow btn-sm payment" data-id="'+data[i].id+'">'+ 'No Payment'+'</a>'+'</td>';                
            }
            else{
                html +='<td style="text-align:center;" class = "" >'+
                '<a href="javascript:void(0);" class="btn btn-green btn-sm payment" data-id="'+data[i].id+'">'+ 'Paid'+'</a>'+'</td>';
            }
            if(data[i].trade == 0){
                html +='<td style="text-align:center;" id = "">'+
                '<a href="javascript:void(0);" class="btn btn-red btn-sm trade" data-id="'+data[i].id+'">' + 'Deactivated'+'</a>'+'</td>';
            }
            else if(data[i].trade == 1){
                html +='<td style="text-align:center; " id = "">'+
                '<a href="javascript:void(0);" class="btn btn-yellow btn-sm trade" data-id="'+data[i].id+'">'+ 'Pre activated'+'</a>'+'</td>';
            }
            else{
                html +='<td style="text-align:center; " id = "">'+
                '<a href="javascript:void(0);" class="btn btn-green btn-sm trade" data-id="'+data[i].id+'">'+ 'Activated'+'</a>'+'</td>';
            }
            if(data[i].status == 0){
                html +='<td>'+'</td>';
            }
            else if(data[i].status == 1){
                html +='<td>'+'Placed'+'</td>';
            }
            else{
                html +='<td>'+'Cancelled'+'</td>';
            }
            if(data[i].place_order == 1){
                html +='<td id = "place_order">'+'<a href="" class = "place_order" data-id="'+data[i].id+'"> <img class="img-responsive" width="25" height="25" src="{{ asset("img/arrow_icon.png") }}"/></a>'+'</td>';
            }
            else{
                html +='<td>'+'</td>';
            }
            if(data[i].cancel_order == 1){
                html +='<td id = "cancel_order">'+'<a href="" class = "cancel_order" data-id="'+data[i].id+'"> <img class="img-responsive" width="25" height="25" src="{{ asset("img/cancel.png") }}"/></a>'+'</td>';
            }
            else{
                html +='<td>'+'</td>';
            }
            html +='</tr>'
        }
        $('#table_data').html(html);
        }
    });

    $('#table_data').on('click','.payment',function(){
        var id = $(this).data('id');
        // console.log(id);
        $.ajax({
        url :"update_payment",
        data: {id:id},
        dataType : "JSON",
        type:'GET',
        success: function(data){
            // alert(data);
            location.reload();
        }
        });
        return false;
    });
    $('#table_data').on('click','.trade',function(){
        var id = $(this).data('id');
        // console.log(id);
        $.ajax({
        url :"update_trade",
        data: {id:id},
        dataType : "JSON",
        type:'GET',
        success: function(data){
            // alert(data);
            location.reload();
        }
        });
        return false;
    });
    $('#table_data').on('click','.cancel_order',function(){
        var id = $(this).data('id');
        // console.log(id);
        $.ajax({
        url :"update_cancel_order",
        data: {id:id},
        dataType : "JSON",
        type:'GET',
        success: function(data){
            // alert(data);
            location.reload();
        }
        });
        return false;
    });
    $('#table_data').on('click','.place_order',function(){
        var id = $(this).data('id');
        // console.log(id);
        $.ajax({
        url :"update_place_order",
        data: {id:id},
        dataType : "JSON",
        type:'GET',
        success: function(data){
            // alert(data);
            location.reload();
        }
        });
        return false;
    });
});
</script>
@else
    <P>Not Allow</p>
@endif
@endsection
