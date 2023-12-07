import Link from "next/link";

export default function HelpCenter(){
return (
<div>


<footer className='footer'>
<div>
<div className='row'>
<Link href="/">Home</Link>
<Link href="/redeem">Redeem</Link>
<Link href="/my-books">My Books</Link>
</div>

<div className='row'>
<Link href="/help-center">Help Center</Link>
<Link href="/legal-notices">Legal notices</Link>
<Link href="/privacy-policy">Privacy Policy</Link>
<Link href="/terms-conditions">Terms and Conditions</Link>
<Link href="/activate-device">Activate Your device</Link>
</div>
<div className='row'>
<Link href="/ads">Interest Based Ads</Link>
<Link href="/personal-info">Do Not Sell My Personal Information</Link>
<Link href="/privacy-policy">Closed Captioning Inquiries</Link>
<p>© 2023 Movies Anywhere. All Rights Reserved.</p>

</div>
</div>

</footer>

</div>
)
}