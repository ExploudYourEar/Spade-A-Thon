(function () {
	'use strict';
	const runners = nodecg.Replicant('runners');
	class RunnersControl extends Polymer.Element {
		
		static get is() {
			return 'runners-control';
		}
		static get properties() {
            return {
                name1:String,
                name2:String,
                name3:String,
                name4:String,
                time1:String,
                time2:String,
                time3:String,
                time4:String,
                place1:Number,
                place2:Number,
                place3:Number,
                place4:Number,
                forfeited1:Boolean,
                forfeited2:Boolean,
                forfeited3:Boolean,
                forfeited4:Boolean
			}
		}
		setRunnersValues(value)
		{
            this.name1 = value.name1;
            this.name2 = value.name2;
            this.name3 = value.name3;
            this.name4 = value.name4;
            this.time1 = value.time1;
            this.time2 = value.time2;
            this.time3 = value.time3;
            this.time4 = value.time4;
            this.place1 = value.place1;
            this.place2 = value.place2;
            this.place3 = value.place3;
            this.place4 = value.place4;
            this.forfeited1 = value.forfeited1;
            this.forfeited2 = value.forfeited2;
            this.forfeited3 = value.forfeited3;
            this.forfeited4 = value.forfeited4;
		}
		ready()
		{
			super.ready();
			runners.on('change', this.setRunnersValues.bind(this));

        }
        _submitForm()
        {
            var inputRunner1 = Polymer.dom(this.root).querySelector("#runner1");
            var inputRunner2 = Polymer.dom(this.root).querySelector("#runner2");
            var inputRunner3 = Polymer.dom(this.root).querySelector("#runner3");
            var inputRunner4 = Polymer.dom(this.root).querySelector("#runner4");
            if(inputRunner2 == null)
            {
                window.alert("C'EST LA MERDE");
            }
            runners.value.name1 = inputRunner1.value;
            runners.value.name2 = inputRunner2.value;
            runners.value.name3 = inputRunner3.value;
            runners.value.name4 = inputRunner4.value;
        }
	}
	

	customElements.define(RunnersControl.is, RunnersControl);
})();