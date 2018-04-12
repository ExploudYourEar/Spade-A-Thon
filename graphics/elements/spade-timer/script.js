(function () {
	'use strict';
	const timer = nodecg.Replicant('timer'); 
	class SpadeTimer extends Polymer.Element {
		
		static get is() {
			return 'spade-timer';
		}
		static get properties() {
            return {
				hours: Number,
				minutes: Number,
				seconds: Number,
				started: Boolean,
				paused: Boolean,
				startString: String,
				pauseString: String
			}
		}
		setValues(value)
		{
			this.hours=value.hours;
			this.minutes=value.minutes;
			this.seconds=value.seconds;
			this.started=value.started;
			this.paused=value.paused;
		}
		ready()
		{
			super.ready();
			timer.on('change', this.setValues.bind(this));

		}
		
		//from agdq layout
		//----------------------------------------------
		_lessThanEqZero(number) {
			return number <= 0;
		}

		_padTime(number) {
			return String(number).padStart(2, '0');
		}

		_formatMilliseconds(milliseconds) {
			return Math.floor(milliseconds / 100);
		}
		//----------------------------------------------
		//from agdq layout
	}
	

	customElements.define(SpadeTimer.is, SpadeTimer);
})();