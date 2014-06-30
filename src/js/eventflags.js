var EventFlagView = Collinder.extend({

    flagheight:16,

    render:function()
    {
        _.each(this.dates,function(e,i)
        {                       
            if (i < this.dates.length-1) // don't plot the last date (now).
            {
                var node    = this.svg.append('g').attr('class','bar');
                var colour  = this.getColour(i);
                var label   = e.get('name');
                var current = e.get('date');
                
                // don't plot anything before my birth.
                if (current < me.born) current = me.born;       

                // show the flag.
                this.addEventFlag(node,current,colour,label);    
            }

        },this);        

        return this;
    },

});