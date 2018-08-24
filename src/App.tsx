import { ChoiceGroup, classNamesFunction, IChoiceGroupStyleProps, IChoiceGroupStyles, IStyle, IStyleFunctionOrObject } from "office-ui-fabric-react";
import * as React from 'react';

interface IStyles {
  root: IStyle
  subComponentStyles: {
    choiceGroup: IStyleFunctionOrObject<IChoiceGroupStyleProps, IChoiceGroupStyles>;
  }
}

const getStyles = (): Partial<IStyles> => ({
  root: {
    background: "red"
  },
  subComponentStyles: {
    choiceGroup: {
      root: {
        background: "green"
      }
    }
  }
})

const getClassNames = classNamesFunction<{}, IStyles>();

class App extends React.Component {
  public render() {
    const classNames = getClassNames(getStyles);
    return (
      <div className={classNames.root}>
        <ChoiceGroup
          options={[{ key: "1", text: "1" }, { key: "2", text: "2" }]}
          styles={classNames.subComponentStyles.choiceGroup}
        />
      </div>
    );
  }
}

export default App;
