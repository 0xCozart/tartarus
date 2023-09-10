/**
 * props for their respective styling
-style / className	Terminal root container.
-contentStyle/contentClassName = Terminal content container.
-inputAreaStyle/inputAreaClassName = Input area element (Container for prompt label and input field).
-promptLabelStyle/promptLabelClassName = Prompt label (The prefix for the input).
-inputStyle/inputClassName = Input field. Note: Applying styles for the text here may cause unexpected results, see below.
-inputTextStyle/inputTextClassName = Input field text.
-messageStyle/messageClassName = Terminal messages (Incl. command echoes if enabled via the styleEchoBack prop).
 */

const lightpink = "#C27DAC";
const green = "#58BD68";
const grey = "#CCBFAC";
const orange = "#FF8D2E";
const darkgrey = "#2A272A";

const stylePrimary = {
  background: grey,
};

const inputTextStylePrimary = {
  color: green,
  caretColor: green,
};

const contentStylePrimary = {
  color:green
}

export {
  darkgrey,
  green,
  grey,
  inputTextStylePrimary,
  lightpink,
  orange,
  stylePrimary,
  contentStylePrimary,
};
