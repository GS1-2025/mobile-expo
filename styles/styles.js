import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPrevention: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  contentCadastro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#743e00',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#743900",
  },
  titlePurchase: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#743e00',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 12,
    marginBottom: 14,
    height: 50,
    width: 250,
  },
  btn: {
    backgroundColor: "#ffe6aa",
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b68100',
    marginTop: 10
  },
  textBtn: {
    color: '#b68100',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnMonitor: {
    backgroundColor: "#ffe6aa",
    height: 45,
    width: 300,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b68100',
    marginBottom: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fdf2f2',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#743e00',
    marginBottom: 8,
    textAlign: 'center',
  },

  cardDesc: {
    fontSize: 16,
    color: '#743e00',
    lineHeight: 22,
    textAlign: 'center',
  },
  textList: {
    textColor: '#e5fbff',
  },
  description: {
    fontSize: 15
  },
  cardDev: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdf2f2',
    padding: 16,
    width: 350,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  devImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },

  item: {}
})