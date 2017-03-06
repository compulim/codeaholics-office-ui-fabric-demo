'use strict';

import { css } from 'glamor';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';

const ICON_STYLE = css({
  height: 60,
  paddingLeft: 20
});

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDismissDialog = this.handleDismissDialog.bind(this);

    this.state = {
      showDialog: false
    };
  }

  handleButtonClick() {
    console.log('handleButtonClick');

    this.setState({
      showDialog: true
    });
  }

  handleDismissDialog() {
    this.setState({
      showDialog: false
    });
  }

  render() {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row" { ...css({ backgroundColor: '#000', boxShadow: '0 0 20px rgba(192, 192, 192, .3)', padding: 20 }) }>
          <div className="ms-Grid-col ms-u-sm9 ms-u-md9 ms-u-lg9">
            <span className="ms-font-su ms-fontColor-white">
              Codeaholics: Office UI Fabric demo
            </span>
          </div>
          <div className="ms-Grid-col ms-u-sm3 ms-u-md3 ms-u-lg3" { ...css({ textAlign: 'right' }) }>
            <a href="https://dev.office.com/fabric/"><img { ...ICON_STYLE } src="img/officeLogo.png" /></a>
            <a href="https://azure.microsoft.com/en-us/services/app-service/web/"><img { ...ICON_STYLE } src="img/azureWebAppLogo.png" /></a>
            <a href="https://yeoman.io/"><img { ...ICON_STYLE } src="img/yeomanLogo.png" /></a>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12" { ...css({ paddingLeft: 20, paddingTop: 20 }) }>
            <div>
              <Persona
                imageInitials="WW"
                presence={ PersonaPresence.online }
                primaryText="William Wong"
                secondaryText="Solution Architect"
                size={ PersonaSize.large }
              />
            </div>
            <div>
              <br />
              <Button
                onClick={ this.handleButtonClick }
              >
                Set translation language
              </Button>
              <Dialog
                isOpen={ this.state.showDialog }
                type={ DialogType.largeHeader }
                onDismiss={ this.handleDismissDialog }
                subText="Please select the language you want the content to be translated into."
                title="Language"
              >
                <ChoiceGroup
                  options={ [
                    {
                      key: 'A',
                      text: 'English',
                      checked: true
                    },
                    {
                      key: 'B',
                      text: 'Traditional Chinese'
                    },
                    {
                      key: 'C',
                      text: 'Japanese',
                      disabled: true
                    }
                  ] }
                  onChanged={ this._onChoiceChanged }
                />
                <DialogFooter>
                  <Button onClick={ this.handleDismissDialog }>Close</Button>
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('reactRoot')
);
