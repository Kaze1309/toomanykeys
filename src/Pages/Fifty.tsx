
import useTypingGame, {
    CharStateType,
    PhaseType,
  } from "react-typing-game-hook";
  const words = [
    "the",
    "be",
    "of",
    "and",
    "a",
    "to",
    "in",
    "he",
    "have",
    "it",
    "that",
    "for",
    "they",
    "with",
    "as",
    "not",
    "on",
    "she",
    "at",
    "by",
    "this",
    "we",
    "you",
    "do",
    "but",
    "from",
    "or",
    "which",
    "one",
    "would",
    "all",
    "will",
    "there",
    "say",
    "who",
    "make",
    "when",
    "can",
    "more",
    "if",
    "no",
    "man",
    "out",
    "other",
    "so",
    "what",
    "time",
    "up",
    "go",
    "about",
    "than",
    "into",
    "could",
    "state",
    "only",
    "new",
    "year",
    "some",
    "take",
    "come",
    "these",
    "know",
    "see",
    "use",
    "get",
    "like",
    "then",
    "first",
    "any",
    "work",
    "now",
    "may",
    "such",
    "give",
    "over",
    "think",
    "most",
    "even",
    "find",
    "day",
    "also",
    "after",
    "way",
    "many",
    "must",
    "look",
    "before",
    "great",
    "back",
    "through",
    "long",
    "where",
    "much",
    "should",
    "well",
    "people",
    "down",
    "own",
    "just",
    "because",
    "good",
    "each",
    "those",
    "feel",
    "seem",
    "how",
    "high",
    "too",
    "place",
    "little",
    "world",
    "very",
    "still",
    "nation",
    "hand",
    "old",
    "life",
    "tell",
    "write",
    "become",
    "here",
    "show",
    "house",
    "both",
    "between",
    "need",
    "mean",
    "call",
    "develop",
    "under",
    "last",
    "right",
    "move",
    "thing",
    "general",
    "school",
    "never",
    "same",
    "another",
    "begin",
    "while",
    "number",
    "part",
    "turn",
    "real",
    "leave",
    "might",
    "want",
    "point",
    "form",
    "off",
    "child",
    "few",
    "small",
    "since",
    "against",
    "ask",
    "late",
    "home",
    "interest",
    "large",
    "person",
    "end",
    "open",
    "public",
    "follow",
    "during",
    "present",
    "without",
    "again",
    "hold",
    "govern",
    "around",
    "possible",
    "head",
    "consider",
    "word",
    "program",
    "problem",
    "however",
    "lead",
    "system",
    "set",
    "order",
    "eye",
    "plan",
    "run",
    "keep",
    "face",
    "fact",
    "group",
    "play",
    "stand",
    "increase",
    "early",
    "course",
    "change",
    "help",
    "line",
  ];
  
  var wordBox = "";
  const testLength: number = 50;
  function setupTest(){
    wordBox = "";
    for (let i = 0; i < testLength; i++) {
      var randomNumber = Math.floor(Math.random() * words.length);
      var randomWord = words[randomNumber];
      wordBox += randomWord + " ";
    }
    
  }
  setupTest();
  const text = wordBox;
  var duration = 0;
  export function Fifty(){
    
    const {
      states: {
        charsState,
        length,
        currIndex,
        correctChar,
        errorChar,
        phase,

      },
      actions: { insertTyping, resetTyping, deleteTyping, getDuration },
    } = useTypingGame(text);
  
    const handleKey = (key:any) => {
      if (key === "Escape") {
        resetTyping();
        return;
      }
      if (key === "Backspace") {
        deleteTyping(false);
        return;
      }
      if (key.length === 1) {
        insertTyping(key);
      }
    };
    var accuracy= 0;
    var grosswpm= 0;
    var netwpm= 0;
    if (phase === PhaseType.Ended) {
      grosswpm = Math.round(
        (correctChar / 5 / (getDuration() / 1000)) * 60
      );
      netwpm = grosswpm - errorChar;
      accuracy = Math.round((correctChar / length) * 100);
      duration = getDuration() / 1000;
      if (grosswpm < 0) {
        grosswpm = 0;
      }
    }
  
    return (
      <>
      
        <div className="header">
          <h2>too-many-keys</h2>
        </div>
        <div className="landing-page">
          <div
            className="typing-test"
            onKeyDown={(e) => {
              handleKey(e.key);
              e.preventDefault();
            }}
            tabIndex={0}
          >
            {text.split("").map((char: string, index: number) => {
              let state = charsState[index];
              let color =
                state === CharStateType.Incomplete
                ? "#505b5e"
                : state === CharStateType.Correct
                ? "#ccc2b1"
                : "#771d1d";
              return (
                <span
                  key={char + index}
                  style={{ color }}
                  className={currIndex + 1 === index ? "curr-letter" : ""}
                >
                  {char}
                </span>
              );
            })}
          </div>
          <pre>
            <div className="result-card">
              <span className="res gwpm">{grosswpm} wpm</span><br />
              <span className="res nwpm">Net Speed : {netwpm} wpm</span><br />
              <span className="res acc">Accuracy : {accuracy} %</span><br />
              <span className="res time">Time : {Math.round(duration)} sec</span>
            </div>
          </pre>
        </div>
      </>
    );
  };
  
  export default Fifty;