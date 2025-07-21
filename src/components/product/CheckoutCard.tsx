import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CheckoutCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Checkout
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Item</p>
            <p className="font-medium text-gray-700">Ayurvedic Wellness Pack</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-medium text-gray-700">₹999.00</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500">Delivery</p>
            <p className="font-medium text-gray-700">Free</p>
          </div>

          <div className="border-t pt-4">
            <p className="text-lg font-semibold text-gray-800">Total: ₹999.00</p>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Confirm Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
