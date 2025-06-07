import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1100,
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
    color: '#4c2500',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#743900",
  },
  input: {
    backgroundColor: '#e5fbff',
    borderWidth: 1,
    color: '#002c4e',
    height: 50,
    width: 220,
    borderRadius: 15,
    marginTop: 5
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
     fontWeight: 'bold' ,
  },
  listarFlat: {
    backgroundColor: '#002c4e',
    width: 220,
    color: '#e5fbff',
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 3,
    borderRadius: 15,
    marginTop: 5
  },
  btnExcluir: {
    backgroundColor: "red",
    width: 80,
    borderRadius: 15,
    alignItems: "center",
    height: 21,
    marginTop: 7,
    marginBottom: 7,
    marginRight: 3,
  },
  btnEditar: {
    backgroundColor: "orange",
    width: 80,
    borderRadius: 15,
    alignItems: "center",
    height: 21,
    marginTop: 7,
    marginBottom: 7,
  },
  link: {
    backgroundColor: '#002c4e',
    fontSize: 18,
    color: '#e5fbff',
    width: 250,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10
  },
  textList: {
    textColor: '#e5fbff',
  }
})