const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition

class Recognizer {
	constructor() {
		this.recognition = new SpeechRecognition();
		this.recognition.lang = "ru-RU";
		this.isRecognizing = false;
		this.transcript = "";
	}

	start(handler) {
		this.transcript = "";
		this.recognition.onresult = (event) => {
			this.onResult(event, handler);
		};
		this.recognition.start();
		this.isRecognizing = true;
	}

	stop() {
		this.recognition.abort();
		this.isRecognizing = false;
	}

	onResult(event, handler) {
		var interim_transcript = "";
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			var result = event.results[i];
			if (result.isFinal) {
				this.transcript += result[0].transcript;
			} else {
				interim_transcript += result[0].transcript;
			}
		}
		handler(interim_transcript)
		stop();
	}
}