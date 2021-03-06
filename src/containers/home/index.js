import React from 'react'
import {
  Divider,
  ListItem,
  ListPadding,
  PureComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Subheader,
  Toolbar,
  View
} from 'react-native-mdcore'

import { navigatorActions } from '@redux'
import { bindActionCreators, connect } from '@store'

const STATUS_BAR = <StatusBar />

class HomeContainer extends PureComponent {
  render() {
    const styles = Styles.get()
    return (
      <View style={styles.container}>
        <Toolbar
          title="ReactNativeMdCore"
          iconName="menu"
          statusBar={STATUS_BAR}
          onNavigationPress={this._onMenuPress}
        />
        <ScrollView style={{ flex: 1 }}>
          <ListPadding />
          <Subheader text="Material Components" />
          <ListItem
            secondaryText="Bottom navigation with cross-fading views"
            text="Bottom navigation"
            type="two-line-text-only"
            onPress={this.props.navigatorActions.toBottomNavigation}
          />
          <ListItem
            secondaryText="All kinds: flat, raised, dropdown, icon, etc"
            text="Buttons"
            type="two-line-text-only"
            onPress={this.props.navigatorActions.toButtons}
          />
          <ListItem
            secondaryText="Material with rounded corners and a drop shadow"
            text="Cards"
            type="two-line-text-only"
            onPress={this.props.navigatorActions.toCards}
          />
          <ListItem
            secondaryText="Single line of editable text and numbers"
            text="Text fields"
            type="two-line-text-only"
            onPress={this.props.navigatorActions.toTextFields}
          />
          {/*<Divider />*/}
          <ListPadding />
        </ScrollView>
      </View>
    )
  }

  _onMenuPress = ({ hardwareBackPress }) => {
    return !hardwareBackPress && this.props.navigatorActions.openDrawer()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(HomeContainer)

const Styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
