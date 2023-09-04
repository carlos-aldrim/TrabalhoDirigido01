import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: "#C4C4C4",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 8,
    padding: 10,
    width: "100%",
  },
  button: {
    alignItems: "center",
    padding: 10,
    border: "none",
  },
  buttonText: {
    color: "#00ABF0",
    fontSize: 18,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
  },
});
