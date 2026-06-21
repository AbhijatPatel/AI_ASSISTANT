from google import genai

client = genai.Client(
    api_key="AIzaSyCWSE4t8Q_ZjP9pzkHLlreN7_Cb7yIfOUE"
)

with open("notes.txt", "r") as file:
    notes = file.read()

while True:
    question = input("You: ")

    if question.lower() == "exit":
        break

    prompt = notes + "\n\nQuestion: " + question

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    print("\nAI:", response.text)

    with open("chat_history.txt", "a") as file:
        file.write(f"\nYou: {question}\n")
        file.write(f"AI: {response.text}\n")