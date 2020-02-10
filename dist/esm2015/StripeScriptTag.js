import { __decorate, __param } from "tslib";
import { Injectable, Inject } from "@angular/core";
import { STRIPE_PUBLISHABLE_KEY, STRIPE_OPTIONS
//, StripeCard, StripeToken
 } from "./StripeTypes";
import * as i0 from "@angular/core";
import * as i1 from "./StripeTypes";
let StripeScriptTag = class StripeScriptTag {
    constructor(key, options) {
        this.src = "https://js.stripe.com/v3/";
        this.load = this.injectIntoHead();
        if (key)
            this.setPublishableKey(key, options);
    }
    promiseStripe() {
        return this.load;
    }
    promiseInstance() {
        return this.promiseStripe()
            .then(stripe => {
            if (!this.StripeInstance) {
                const err = new Error("Stripe PublishableKey NOT SET. Use method StripeScriptTag.setPublishableKey()");
                err["code"] = "STRIPEKEYNOTSET";
                throw err;
                //return Promise.reject( err )
            }
            return this.StripeInstance;
        });
    }
    setPublishableKey(key, options) {
        return this.load.then(() => this.StripeInstance = this.Stripe(key, options));
    }
    injectIntoHead() {
        if (window["Stripe"]) {
            return Promise.resolve(this.Stripe = window["Stripe"]);
        }
        return new Promise((res, rej) => {
            const head = this.getTargetTagDropElement();
            const script = document.createElement("script");
            script.setAttribute("src", this.src);
            script.setAttribute("type", "text/javascript");
            script.addEventListener("load", () => {
                this.Stripe = this.grabStripe();
                res(this.Stripe);
            });
            head.appendChild(script);
        });
    }
    grabStripe() {
        return window["Stripe"];
    }
    getTargetTagDropElement() {
        let elm = document.getElementsByTagName("head");
        if (elm.length)
            return elm[0];
        return document.getElementsByTagName("body")[0];
    }
};
StripeScriptTag.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STRIPE_OPTIONS,] }] }
];
StripeScriptTag.ɵprov = i0.ɵɵdefineInjectable({ factory: function StripeScriptTag_Factory() { return new StripeScriptTag(i0.ɵɵinject(i1.STRIPE_PUBLISHABLE_KEY), i0.ɵɵinject(i1.STRIPE_OPTIONS)); }, token: StripeScriptTag, providedIn: "root" });
StripeScriptTag = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(STRIPE_PUBLISHABLE_KEY)),
    __param(1, Inject(STRIPE_OPTIONS))
], StripeScriptTag);
export { StripeScriptTag };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaXBlU2NyaXB0VGFnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3RyaXBlLWFuZ3VsYXIvIiwic291cmNlcyI6WyJTdHJpcGVTY3JpcHRUYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWxELE9BQU8sRUFDMEMsc0JBQXNCLEVBQUUsY0FBYztBQUNyRiwyQkFBMkI7RUFDNUIsTUFBTSxlQUFlLENBQUE7OztBQUVZLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFNNUQsWUFDa0MsR0FBWSxFQUNwQixPQUErQjtRQVB6RCxRQUFHLEdBQVUsMkJBQTJCLENBQUE7UUFTdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDakMsSUFBSSxHQUFHO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRTthQUMxQixJQUFJLENBQUMsTUFBTSxDQUFBLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQTtnQkFDdEcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFBO2dCQUMvQixNQUFNLEdBQUcsQ0FBQTtnQkFDVCw4QkFBOEI7YUFDL0I7WUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQ2YsR0FBVSxFQUNWLE9BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQzlDLENBQUE7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFBO1NBQ3ZEO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQTtZQUMzQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1lBRTlDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUMsR0FBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDL0IsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtZQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRCx1QkFBdUI7UUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRS9DLElBQUcsR0FBRyxDQUFDLE1BQU07WUFBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUUzQixPQUFPLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7eUNBakVJLE1BQU0sU0FBQyxzQkFBc0I7NENBQzdCLE1BQU0sU0FBQyxjQUFjOzs7QUFScUIsZUFBZTtJQUE3RCxVQUFVLENBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFPNUIsV0FBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUM5QixXQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtHQVJvQixlQUFlLENBd0U3RDtTQXhFOEMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgU3RyaXBlLCBTdHJpcGVJbnN0YW5jZSwgU3RyaXBlSW5zdGFuY2VPcHRpb25zLCBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLCBTVFJJUEVfT1BUSU9OU1xuICAvLywgU3RyaXBlQ2FyZCwgU3RyaXBlVG9rZW5cbn0gZnJvbSBcIi4vU3RyaXBlVHlwZXNcIlxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSkgZXhwb3J0IGNsYXNzIFN0cmlwZVNjcmlwdFRhZ3tcbiAgc3JjOnN0cmluZyA9IFwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiXG4gIFN0cmlwZSE6U3RyaXBlLy9zZXQgYXQgcnVudGltZVxuICBTdHJpcGVJbnN0YW5jZSE6U3RyaXBlSW5zdGFuY2VcbiAgbG9hZDpQcm9taXNlPGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNUUklQRV9QVUJMSVNIQUJMRV9LRVkpIGtleT86IHN0cmluZyxcbiAgICBASW5qZWN0KFNUUklQRV9PUFRJT05TKSBvcHRpb25zPzogU3RyaXBlSW5zdGFuY2VPcHRpb25zXG4gICl7XG4gICAgdGhpcy5sb2FkID0gdGhpcy5pbmplY3RJbnRvSGVhZCgpXG4gICAgaWYgKGtleSkgdGhpcy5zZXRQdWJsaXNoYWJsZUtleShrZXksIG9wdGlvbnMpXG4gIH1cblxuICBwcm9taXNlU3RyaXBlKCk6UHJvbWlzZTxTdHJpcGU+e1xuICAgIHJldHVybiB0aGlzLmxvYWRcbiAgfVxuXG4gIHByb21pc2VJbnN0YW5jZSgpOlByb21pc2U8U3RyaXBlSW5zdGFuY2U+e1xuICAgIHJldHVybiB0aGlzLnByb21pc2VTdHJpcGUoKVxuICAgIC50aGVuKHN0cmlwZT0+e1xuICAgICAgaWYoICF0aGlzLlN0cmlwZUluc3RhbmNlICl7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlN0cmlwZSBQdWJsaXNoYWJsZUtleSBOT1QgU0VULiBVc2UgbWV0aG9kIFN0cmlwZVNjcmlwdFRhZy5zZXRQdWJsaXNoYWJsZUtleSgpXCIpXG4gICAgICAgIGVycltcImNvZGVcIl0gPSBcIlNUUklQRUtFWU5PVFNFVFwiXG4gICAgICAgIHRocm93IGVyclxuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlamVjdCggZXJyIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuU3RyaXBlSW5zdGFuY2VcbiAgICB9KVxuICB9XG5cbiAgc2V0UHVibGlzaGFibGVLZXkoXG4gICAga2V5OnN0cmluZyxcbiAgICBvcHRpb25zPzpTdHJpcGVJbnN0YW5jZU9wdGlvbnNcbiAgKTpQcm9taXNlPFN0cmlwZUluc3RhbmNlPntcbiAgICByZXR1cm4gdGhpcy5sb2FkLnRoZW4oICgpPT5cbiAgICAgIHRoaXMuU3RyaXBlSW5zdGFuY2U9dGhpcy5TdHJpcGUoa2V5LCBvcHRpb25zKVxuICAgIClcbiAgfVxuXG4gIGluamVjdEludG9IZWFkKCk6UHJvbWlzZTxTdHJpcGU+e1xuICAgIGlmKCB3aW5kb3dbXCJTdHJpcGVcIl0gKXtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoIHRoaXMuU3RyaXBlPXdpbmRvd1tcIlN0cmlwZVwiXSApXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e1xuICAgICAgY29uc3QgaGVhZCA9IHRoaXMuZ2V0VGFyZ2V0VGFnRHJvcEVsZW1lbnQoKVxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLnNyYylcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XG4gICAgICAgIHRoaXMuU3RyaXBlID0gdGhpcy5ncmFiU3RyaXBlKClcbiAgICAgICAgcmVzKCB0aGlzLlN0cmlwZSApXG4gICAgICB9KVxuXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9KVxuICB9XG5cbiAgZ3JhYlN0cmlwZSgpe1xuICAgIHJldHVybiB3aW5kb3dbXCJTdHJpcGVcIl1cbiAgfVxuXG4gIGdldFRhcmdldFRhZ0Ryb3BFbGVtZW50KCl7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVxuXG4gICAgaWYoZWxtLmxlbmd0aClyZXR1cm4gZWxtWzBdXG5cbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdXG4gIH1cbn1cbiJdfQ==