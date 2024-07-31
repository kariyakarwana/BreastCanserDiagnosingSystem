from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionGetFeedback(Action):

    def name(self) -> str:
        return "action_get_feedback"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: dict) -> list:
        feedback = tracker.latest_message['text']
        dispatcher.utter_message(text=f"Thank you for your feedback: '{feedback}'")
        return []

class ActionGetRating(Action):

    def name(self) -> str:
        return "action_get_rating"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: dict) -> list:
        rating = tracker.get_slot('rating')
        dispatcher.utter_message(text=f"Thank you for rating our website: '{rating}'")
        return [SlotSet("rating", None)]
