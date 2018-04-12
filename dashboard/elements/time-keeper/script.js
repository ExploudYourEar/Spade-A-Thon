(function () {
	'use strict';
	var timerInterval;
	var mil=0;
	const interval = 100;
	const timer = nodecg.Replicant('timer');
	const runners = nodecg.Replicant('runners');	
	class TimeKeeper extends Polymer.Element {
		
		static get is() {
			return 'time-keeper';
		}
		static get properties() {
            return {
				hours: Number,
				minutes: Number,
				seconds: Number,
				started: Boolean,
				paused: Boolean,
				startString: String,
				pauseString: String,
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
		setTimerValues(value)
		{
			this.hours=value.hours;
			this.minutes=value.minutes;
			this.seconds=value.seconds;
			this.started=value.started;
			this.paused=value.paused;
			this.startString = value.startString;
			this.pauseString = value.pauseString;
		}
		setRunnersValues(value)
		{
			console.log(value);
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
			timer.on('change', this.setTimerValues.bind(this));
			runners.on('change', this.setRunnersValues.bind(this));
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
		//from agdq slayout
		_startStopTimer()
		{
			if(timer.value.started)
			{
				timer.value.hours=0;
				timer.value.minutes=0;
				timer.value.seconds=0;
				mil = 0;
				if(timerInterval != null)
				{
					clearInterval(timerInterval);
				}
				timer.value.startString = "Start";
				timer.value.pauseString = "Pause";
			}
			else
			{
				timer.value.startString = "Stop";
				timerInterval = setInterval(()=>{
					mil+=interval;
					if(mil>=1000)
					{
						timer.value.seconds++;
						mil=0;
						if(timer.value.seconds>=60)
						{
							timer.value.minutes++;
							if(timer.value.minutes>=60)
							{
								timer.value.hours++;
								timer.value.minutes=0;
							}
							timer.value.seconds=0;

						}

					}

				},interval);
			}
			timer.value.paused=false;
			timer.value.started = !timer.value.started;
		}
		_pauseUnpauseTimer()
		{
			if(timer.value.started)
			{
				if(!timer.value.paused)
				{
					if(timerInterval != null)
					{
						clearInterval(timerInterval);
					}
					timer.value.pauseString = "UnPause";
				}
				else
				{
					timer.value.pauseString = "Pause";
					timerInterval = setInterval(()=>{
						mil+=interval;
						if(mil>=1000)
						{
							timer.value.seconds++;
							mil=0;
							if(timer.value.seconds>=60)
							{
								timer.value.minutes++;
								if(timer.value.minutes>=60)
								{
									timer.value.hours++;
									timer.value.minutes=0;
								}
								timer.value.seconds=0;

							}

						}

					},interval);
				}
				timer.value.paused = !timer.value.paused;
			}

		}
	}
	

	customElements.define(TimeKeeper.is, TimeKeeper);
})();