import { StyleSheet , Platform } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		height: Platform.OS === "ios" ?  scale(84) : scale(64) ,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		elevation: 3,
		backgroundColor: '#000',
		
		
	},
	backIconContainer: {
		width: scale(48),
		height: scale(48),
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: scale(8),
		borderRadius: scale(24),
		overflow: 'hidden',
		zIndex: 1,
		paddingTop: Platform.OS === "ios" ?  23 : 0 ,
	},
	backIconButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		
	},
	title: {
		flex: 1,
		fontSize: fontScale(30),
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
		paddingTop: Platform.OS === "ios" ?  23 : 0 ,
	},
});
