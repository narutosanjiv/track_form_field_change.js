(function($){
  
  check_for_change = function(form_field, previous_values){
    var is_changed = false
    form_field.each(function(){
      if(($.trim(previous_values[$(this).attr('id')]) != $.trim($('#' + $(this).attr('id')).val())) && !is_changed && ($(this).attr('type') != 'radio'))
      {
        is_changed = true 
      }
      if(($(this).attr('type') == 'radio') && !is_changed)
      {
        
        if(previous_values[$(this).attr('id')] != $('#' + $(this).attr('id')).is(':checked'))
        {
          is_changed = true 
        }
      } 
    });
    return is_changed;
  }
  
  $.fn.track_field_change = function() {
    var field_to_be_tracked = {}
    var form_field = $(this).find('.track_change')
    form_field.each(function(){
      if($(this).attr('type') == 'radio')
      {
        field_to_be_tracked[$(this).attr('id')] = $(this).is(':checked')
      }
      else
      {
        field_to_be_tracked[$(this).attr('id')] = $(this).val()
      }
    });
    
    $(this).keyup(function(){
      has_field_change = check_for_change(form_field, field_to_be_tracked);
      if(has_field_change)
      {
        $('.save_record_button').removeAttr('disabled');
      }
      else
      {
        $('.save_record_button').attr('disabled', 'disabled');
      }
    });   
    
    $(this).on('change', '.track_change', function(){
      has_field_change = check_for_change(form_field, field_to_be_tracked);
      console.log(has_field_change);
      console.log("field disabled");
      if(has_field_change)
      {
        $('.save_record_button').removeAttr('disabled');
      }
      else
      {
        
        $('.save_record_button').attr('disabled', 'disabled');
      }

    });        
  };
}( jQuery ));
